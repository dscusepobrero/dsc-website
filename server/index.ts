import "dotenv/config";
import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { handleDemo } from "./routes/demo";

// Get the directory of the current module
const __dirname = import.meta.dirname;
// Construct a path to the project's root directory, which is one level up from `server/`
const projectRoot = path.join(__dirname, '..');

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  app.get("/api/events/:year/:folder/images", async (req, res) => {
    const { year, folder } = req.params;
    // Use the robust projectRoot path
    const base = path.join(
      projectRoot,
      "public",
      "assets",
      "events",
      year,
      folder,
    );

    try {
      const dirents = await fs.readdir(base, { withFileTypes: true });
      const images = dirents
        .filter(
          (d) => d.isFile() && /\.(jpe?g|png|gif|webp|avif)$/i.test(d.name),
        )
        .map(
          (d) =>
            // Update the URL to match the new directory
            `/assets/events/${encodeURIComponent(
              year,
            )}/${encodeURIComponent(folder)}/${encodeURIComponent(d.name)}`
        );
      res.status(200).json({ images });
    } catch (err) {
      // It's okay if a folder doesn't exist, just return no images.
      res.status(200).json({ images: [] });
    }
  });

  // Return all images under `public/assets/events all pictures` as public URLs
  app.get("/api/event-photos", async (_req, res) => {
    // Use the robust projectRoot path
    const base = path.join(projectRoot, "public", "assets", "events all pictures");

    try {
      const images: string[] = [];
      const years = await fs.readdir(base, { withFileTypes: true });

      for (const yearDir of years) {
        if (!yearDir.isDirectory()) continue;
        const year = yearDir.name;

        const yearPath = path.join(base, year);
        try {
          const eventFolders = await fs.readdir(yearPath, { withFileTypes: true });

          for (const eventDir of eventFolders) {
            if (!eventDir.isDirectory()) continue;
            const eventFolder = eventDir.name;
            const eventPath = path.join(yearPath, eventFolder);

            try {
              const imageFiles = await fs.readdir(eventPath);
              for (const imageFile of imageFiles) {
                if (/\.(jpe?g|png|gif|webp|avif)$/i.test(imageFile)) {
                  const url = `/assets/events all pictures/${encodeURIComponent(year)}/${encodeURIComponent(eventFolder)}/${encodeURIComponent(imageFile)}`;
                  images.push(url);
                }
              }
            } catch (e) {
              // Ignore if a subdirectory can't be read
            }
          }
        } catch (e) {
          // Ignore if a year directory can't be read
          continue;
        }
      }
      res.status(200).json({ images });
    } catch (err) {
      console.error("Failed to read event photos:", err);
      res.status(500).json({ images: [], error: "Could not retrieve photos." });
    }
  });

  return app;
}
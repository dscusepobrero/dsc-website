import "dotenv/config";
import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { handleDemo } from "./routes/demo";

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
    const base = path.join(
      process.cwd(),
      "public",
      "assets",
      "events all pictures",
      year,
      folder
    );

    try {
      const dirents = await fs.readdir(base, { withFileTypes: true });
      const images = dirents
        .filter(
          (d) => d.isFile() && /\.(jpe?g|png|gif|webp|avif)$/i.test(d.name)
        )
        .map(
          (d) =>
            `/assets/events all pictures/${encodeURIComponent(
              year
            )}/${encodeURIComponent(folder)}/${encodeURIComponent(d.name)}`
        );
      res.status(200).json({ images });
    } catch (err) {
      res.status(200).json({ images: [] });
    }
  });

  // Return all images under `public/assets/events all pictures` as public URLs
  app.get("/api/event-photos", async (_req, res) => {
    const base = path.join(process.cwd(), "public", "assets", "events all pictures");
    const yearFilter = typeof _req.query.year === "string" ? _req.query.year : undefined;

    try {
      const images: string[] = [];
      const years = await fs.readdir(base, { withFileTypes: true });

      for (const y of years) {
        if (!y.isDirectory()) continue;
        const year = y.name;
        if (yearFilter && year !== yearFilter) continue;
        const yearPath = path.join(base, year);
        let dirents = [] as any[];
        try {
          dirents = await fs.readdir(yearPath, { withFileTypes: true });
        } catch (e) {
          continue;
        }

        for (const d of dirents) {
          if (!d.isFile()) continue;
          if (!/\.(jpe?g|png|gif|webp|avif)$/i.test(d.name)) continue;
          const url = `/assets/events all pictures/${encodeURIComponent(year)}/${encodeURIComponent(d.name)}`;
          images.push(url);
        }
      }

      res.status(200).json({ images });
    } catch (err) {
      res.status(200).json({ images: [] });
    }
  });

  return app;
}

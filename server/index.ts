import "dotenv/config";
import express from "express";
import cors from "cors";

import allImages from "./image-data.json";

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

  app.get("/api/events/:year/:folder/images", (req, res) => {
    const { year, folder } = req.params;

    // Create the search string, e.g., "/events/2023/Picnic/"
    // Encode components to match how URLs look
    const searchString = `/assets/events/${encodeURIComponent(year)}/${encodeURIComponent(folder)}`;

    // Filter the static JSON list
    const images = allImages.filter(img => img.includes(searchString));

    res.status(200).json({ images });
  });

  // 2. New Logic for All Photos
  app.get("/api/event-photos", (_req, res) => {
    const images = allImages.filter(img =>
        img.includes("/events all pictures/") ||
        img.includes("/events/")
    );
    res.status(200).json({ images });
  });

  return app;
}

import { RequestHandler } from "express";
import fs from "fs/promises";
import path from "path";
import { EventListResponse, EventEntry } from "@shared/api";

export const handleEventsList: RequestHandler = async (_req, res) => {
  const base = path.join(process.cwd(), "public", "assets", "events");

  const entries: EventEntry[] = [];

  try {
    const years = await fs.readdir(base, { withFileTypes: true });

    for (const yearDir of years) {
      if (!yearDir.isDirectory()) continue;
      const year = yearDir.name;
      const yearPath = path.join(base, year);

      const folders = await fs.readdir(yearPath, { withFileTypes: true });
      for (const folderDir of folders) {
        if (!folderDir.isDirectory()) continue;
        const folder = folderDir.name;
        const folderPath = path.join(yearPath, folder);

        // read files and find first image-like file
        let files: string[] = [];
        try {
          files = await fs.readdir(folderPath);
        } catch (e) {
          files = [];
        }

        const imageFile = files.find((f) => /\.(jpe?g|png|gif|webp|avif)$/i.test(f));
        const firstImage = imageFile
          ? `/assets/events/${year}/${encodeURIComponent(folder)}/${encodeURIComponent(imageFile)}`
          : undefined;

        entries.push({
          year,
          folder,
          firstImage,
          imagesCount: files.filter((f) => /\.(jpe?g|png|gif|webp|avif)$/i.test(f)).length,
        });
      }
    }

    const resp: EventListResponse = { events: entries };
    res.status(200).json(resp);
  } catch (err) {
    res.status(200).json({ events: [] });
  }
};

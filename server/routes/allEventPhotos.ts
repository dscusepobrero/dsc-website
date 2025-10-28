import { RequestHandler } from "express";
import fs from "fs/promises";
import path from "path";

// Return shape: { images: string[] }
export const handleAllEventPhotos: RequestHandler = async (req, res) => {
  const base = path.join(process.cwd(), "public", "assets", "events all pictures");
  const yearFilter = typeof req.query.year === "string" ? req.query.year : undefined;

  try {
    const images: string[] = [];

    const years = await fs.readdir(base, { withFileTypes: true });

    for (const yearDir of years) {
      if (!yearDir.isDirectory()) continue;
      const year = yearDir.name;
      if (yearFilter && year !== yearFilter) continue;

      const yearPath = path.join(base, year);
      const files = await fs.readdir(yearPath, { withFileTypes: true });

      for (const f of files) {
        if (!f.isFile()) continue;
        if (!/\.(jpe?g|png|gif|webp|avif)$/i.test(f.name)) continue;
        // Build public URL. Encode components.
        const url = `/assets/events all pictures/${encodeURIComponent(year)}/${encodeURIComponent(f.name)}`;
        images.push(url);
      }
    }

    res.status(200).json({ images });
  } catch (err) {
    res.status(200).json({ images: [] });
  }
};

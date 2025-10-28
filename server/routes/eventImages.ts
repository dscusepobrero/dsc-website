import { RequestHandler } from "express";
import fs from "fs/promises";
import path from "path";
import { EventImagesResponse } from "@shared/api";

export const handleEventImages: RequestHandler = async (req, res) => {
  const { year, slug } = req.params as { year: string; slug: string };

  // Directory inside the repo's public folder where images live
  const dir = path.join(process.cwd(), "public", "assets", "events", year, slug);

  try {
    const files = await fs.readdir(dir);
    const images = files
      .filter((f) => /\.(jpe?g|png|gif|webp|avif)$/i.test(f))
      .map((f) => `/assets/events/${year}/${slug}/${encodeURIComponent(f)}`);

    const response: EventImagesResponse = { images };
    res.status(200).json(response);
  } catch (err) {
    // If folder doesn't exist or read fails, return empty array (404 would also be fine)
    res.status(200).json({ images: [] });
  }
};

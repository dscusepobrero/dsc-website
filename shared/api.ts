/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Response for event images listing endpoint
 */
export interface EventImagesResponse {
  images: string[];
}

/**
 * Represents a single discovered event folder and its first image (if any)
 */
export interface EventEntry {
  year: string;
  folder: string;
  firstImage?: string;
  imagesCount: number;
}

export interface EventListResponse {
  events: EventEntry[];
}

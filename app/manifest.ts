import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sincerely Grey: Natural Body Lotions & Perfumes",
    short_name: "Sincerely Grey",
    description: "Naturally sourced body lotions and perfumes, crafted with leaves and herbs from Togo.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f9f8",
    theme_color: "#d4c4a8",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

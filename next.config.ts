import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Sicilia_itinerario_4_giorni";

const nextConfig: NextConfig = {
  // Genera HTML statico per GitHub Pages
  output: "export",
  // Disabilita l'ottimizzazione immagini (non supportata su Pages)
  images: { unoptimized: true },
  // Aggiunge basePath/assetPrefix quando si builda per Pages
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  // Utile per evitare 404 con hosting statico
  trailingSlash: true,
};

export default nextConfig;

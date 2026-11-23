import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (no Node server at runtime).
  output: "export",
  // Default next/image loader needs a server; serve images as-is instead.
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so Pages resolves /about/.
  trailingSlash: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  reactStrictMode: true,
};

export default nextConfig;

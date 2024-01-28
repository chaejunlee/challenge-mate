/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', "in-n-out.com", "digitaleat.kfc.com", "www.tacobell.com", "lsco.scene7.com", "images.fineartamerica.com", "i5.walmartimages.com", "assets.pbimgs.com"]
  }
};

export default config;

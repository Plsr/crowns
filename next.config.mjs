/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextConfig = {};

const pwa = withPWA({
  dest: "public",
});

export default pwa(nextConfig);

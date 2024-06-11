/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "sujeitoprogramador.com" },
      { hostname: "github.com" },
    ],
  },
};

export default nextConfig;

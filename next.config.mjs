/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "lh3.googleusercontent.com",
            protocol: "https",
            port: "",
          },
          {
            hostname: "images.unsplash.com",
            protocol: "https",
            port: "",
          },
          {
            hostname: "assets.aceternity.com",
            protocol: "https",
            port: "",
          },
        ],
      },
};

export default nextConfig;

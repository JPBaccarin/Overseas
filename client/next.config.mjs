/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Overseas", // Nome do seu repositório no GitHub
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

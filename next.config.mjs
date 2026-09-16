/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // https://images.unsplash.com/photo-1787765977827-44dcefaefdaf
    // https://i.ibb.co.com/chp80pgP/Handbag-Pro.png
    // https://i.ibb.co.com/chp80pgP/Handbag-Pro.png
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/chp80pgP/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;

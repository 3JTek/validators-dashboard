/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //https://github.com/vercel/next.js/issues/35822
  redirects: async () => [
    {
      source: "/",
      destination: "/overview",
      permanent: true,
    },
    {
      source: "/validators",
      destination: "/validators/osmosis",
      permanent: true,
    },
  ],
};

export default nextConfig;

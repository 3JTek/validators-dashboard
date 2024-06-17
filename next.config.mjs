/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/overview",
      permanent: true,
    },
  ],
};

export default nextConfig;

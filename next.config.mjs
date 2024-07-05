/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "kkoouuyanextbucket.s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"], // 外部ドメインを追加
  },
};

export default nextConfig;

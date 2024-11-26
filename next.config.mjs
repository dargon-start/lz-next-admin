/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false, // 管理react严格模式
  redirects() {
    return [
      {
        source: '/',
        destination: '/user',
        permanent: true, // 308永久缓存重定向
      },
    ]
  },
}

export default nextConfig

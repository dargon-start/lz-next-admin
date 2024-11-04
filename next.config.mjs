/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  redirects(){
    return [
      {
        source: '/',
        destination: '/user',
        permanent: true, // 308永久缓存重定向
      },
    ]
  }
};

export default nextConfig;

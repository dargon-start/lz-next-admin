/** @type {import('next').NextConfig} */
const nextConfig = {
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

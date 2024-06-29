/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // nextScriptWorkers: true,

  // defined inside vercel.json
  // async rewrites() {
  //   console.log("Rewrites called");
  //   return [
  //     {
  //       source: '/old',
  //       destination: '/new',
  //     },
  //   ]
  // }
};

export default nextConfig;

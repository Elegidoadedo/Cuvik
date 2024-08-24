/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: { ssr: true, displayName: true, cssProp: true },
  },
};

export default nextConfig;

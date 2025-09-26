import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {
        reactCompiler: true,
        optimizeCss: true
    },
    sassOptions: {
        additionalData: '@use "src/appFsd/style/config.sass" as *;'
    }
};

export default nextConfig;

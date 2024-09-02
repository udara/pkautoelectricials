// next.config.js

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export'
// };
//
// module.exports = nextConfig;

module.exports = {
    images: {
        unoptimized: true,
    },
    distDir: 'build',
    assetPrefix: '',  // Ensure this matches your GitHub Pages repository name
    basePath: '',      // Ensure this matches your GitHub Pages repository name
}

//assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',

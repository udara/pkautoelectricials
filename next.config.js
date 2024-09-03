// next.config.js
module.exports = {
    output: 'export',
    distDir: 'build',
    exportTrailingSlash: true,
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/',
            },
        ];
    }
};

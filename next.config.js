module.exports = {
    redirects: async () => {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.pkautocare.com.au',
                    },
                ],
                destination: 'https://pkautocare.com.au/:path*',
                permanent: true,
            },
        ];
    },
    output: 'export',
    distDir: 'build',
    trailingSlash: true,
    assetPrefix: '',
    basePath: '',
};
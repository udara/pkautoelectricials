// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/pk.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
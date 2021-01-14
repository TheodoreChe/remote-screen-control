import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>RSC</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;
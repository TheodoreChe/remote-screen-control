import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
};

export const Layout = ({ children, title = 'RSC' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <nav>
                <Link href="/">
                    <a>RSC Home</a>
                </Link>
            </nav>
        </header>
        {children}
    </>
);

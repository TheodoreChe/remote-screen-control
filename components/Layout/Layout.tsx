import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from 'styles/common.module.css'

type Props = {
    children?: ReactNode;
    title?: string;
};

export const Layout = ({ children, title = 'RSC' }: Props) => (
    <div className={styles.wrapper}>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <nav>
                <Link href="/">
                    <a>RSC Home</a>
                </Link>
            </nav>
        </header>
        {children}
    </div>
);

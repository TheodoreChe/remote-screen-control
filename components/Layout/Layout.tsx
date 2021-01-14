import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from 'styles/common.module.css';

type Props = {
    children?: ReactNode;
    title?: string;
    large?: boolean;
};

export const Layout = ({ children, title = 'RSC', large }: Props) => (
    <div className={large ? styles.largeWrapper : styles.wrapper}>
        <Head>
            <title>{title}</title>
        </Head>
        {children}
    </div>
);

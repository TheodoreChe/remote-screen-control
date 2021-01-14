import React from 'react';
import styles from 'styles/common.module.css';

type Props = {
    title?: string;
    link?: string;
};

export const Screen = ({ title, link }: Props) => (
    <>
        {title && <h1 className={styles.title}>title</h1>}
        {link && <iframe src={link} width="100%" height="691px" frameBorder="0"></iframe>}
    </>
);

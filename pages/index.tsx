import * as React from 'react';
import Link from 'next/link';
import { Layout } from 'components/Layout';
import styles from 'styles/common.module.css';
import { useSocket } from 'lib/useSocket';

type Props = {
    host: undefined | string;
};

const IndexPage: React.FC<Props> = () => {
    const [actualLink, setActualLink] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');

    const { socket } = useSocket('presentation', (newLink: string) => setActualLink(newLink));

    const clickHandle = () => {
        socket.emit('presentation', inputValue);
    };

    const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Layout title="Home | RSC">
            <h1 className={styles.title}>Remote Screen Control Example</h1>
            <h4>Instruction:</h4>
            <img className={styles.image} src="assets/step-1.png" alt="first step" />
            <ul>
                <li>Open Office 365 PowerPoint Document</li>
                <li>Start Live Presentation (Slide Show &gt; Present Live)</li>
                <li>Copy the link</li>
                <li>Insert a presentation share link</li>
                <li>Click on the Start button</li>
                <li>
                    Open the{' '}
                    <Link href="/screen/first">
                        <a>First Screen</a>
                    </Link>{' '}
                    and the{' '}
                    <Link href="/screen/second">
                        <a>Second Screen</a>
                    </Link>{' '}
                    in a new Tab for test
                </li>
            </ul>
            <input
                className={styles.input}
                type="text"
                placeholder="https://ppt.ms/"
                value={inputValue}
                onChange={changeHandle}
            />{' '}
            <button className={styles.button} onClick={clickHandle}>
                Start
            </button>
            {actualLink && <div className={styles.description}>Actual link is: {actualLink}</div>}
        </Layout>
    );
};

export async function getStaticProps() {
    return {
        props: {
            host: process.env.HOST,
        },
    };
}

export default IndexPage;

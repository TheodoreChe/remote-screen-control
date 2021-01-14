import * as React from 'react';
import Link from 'next/link';
import { Layout } from 'components/Layout';
import styles from 'styles/common.module.css'
import {useSocket} from "lib/useSocket";

type Props = {
    host: undefined | string;
}
const IndexPage: React.FC<Props> = ({ host }: Props) => {
    const [link, setLink] = React.useState();
    const socket = useSocket(host);

    React.useEffect(() => {
        if (socket) {
            socket.on('presentation', setLink)
        }
    }, [socket, setLink]);

    return (
        <Layout title="Home | RSC">
            <h1 className={styles.title}>Remote Screen Control Example</h1>
            <h4>Instruction:</h4>
            <img className={styles.image} src="assets/step-1.png" alt="first step"/>
            <ul>
                <li>Open Office 365 PowerPoint Document</li>
                <li>Start Live Presentation (Slide Show > Present Live)</li>
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
            {
                link && (
                    <div>
                        Current link is
                        {link}
                    </div>
                )
            }

            <input className={styles.input} type="text" placeholder="ppt.ms/"/>
            {' '}
            <button className={styles.button}>Start</button>
        </Layout>
    )
};

export async function getStaticProps() {
    return {
        props: {
            host: process.env.HOST
        }
    }
}

export default IndexPage;


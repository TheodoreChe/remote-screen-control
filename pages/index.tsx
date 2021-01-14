import Link from 'next/link';
import { Layout } from 'components/Layout';
import styles from 'styles/common.module.css'

const IndexPage = () => (
    <Layout title="Home | RSC">
        <h1 className={styles.title}>Remote Screen Control Example</h1>
        <h4>Instruction</h4>
        <ul>
            <li>
                Open the{' '}
                <Link href="/screen/first">
                    <a>First Screen</a>
                </Link>{' '}
                and the{' '}
                <Link href="/screen/second">
                    <a>Second Screen</a>
                </Link>{' '}
                in a new Tab
            </li>
            <li>Insert a presentation share link</li>
            <li>Click on the Start button</li>
        </ul>
        <button className={styles.button}>Start</button>
    </Layout>
);

export default IndexPage;

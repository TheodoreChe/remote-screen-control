import Link from 'next/link';
import { Layout } from 'components/Layout';

const IndexPage = () => (
    <Layout title="Home | RSC">
        <h1>Remote Screen Control Example</h1>
        <h4>Instruction</h4>
        <ul>
            <li>
                Open the{' '}
                <Link href="/screen/first">
                    <a>First Screen</a>
                </Link>
                and the{' '}
                <Link href="/screen/second">
                    <a>Second Screen</a>
                </Link>
                in a new Tab
            </li>
            <li>Insert a link to the presentation</li>
            <li>Click on the Start button</li>
        </ul>
    </Layout>
);

export default IndexPage;

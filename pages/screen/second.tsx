import * as React from 'react';
import { Layout } from 'components/Layout';
import { Screen } from 'components/Screen';
import { useSocket } from '../../lib/useSocket';

const SecondScreen: React.FC = () => {
    const [actualLink, setActualLink] = React.useState('');
    useSocket('presentation', (newLink: string) => setActualLink(newLink));

    return (
        <Layout title="Second Screen | RSC" large>
            <Screen title="Second Screen" link={actualLink} />
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

export default SecondScreen;

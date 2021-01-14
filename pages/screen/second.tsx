import * as React from 'react';
import { Layout } from 'components/Layout';
import { Screen } from 'components/Screen';

const SecondScreen: React.FC = () => (
    <Layout title="Second Screen | RSC" large>
        <Screen title="Second Screen" link="https://" />
    </Layout>
);

export default SecondScreen;

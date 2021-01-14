import * as React from 'react';
import { Layout } from 'components/Layout';
import { Screen } from 'components/Screen';

const FirstScreen: React.FC = () => (
    <Layout title="First Screen | RSC" large>
        <Screen title="First Screen" link="https://" />
    </Layout>
);

export default FirstScreen;

import { Metadata } from 'next';

import { ClientPage } from './ClientPage';

export const metadata: Metadata = {
    title: 'test page',
    description: 'test page',

    openGraph: {
        title: 'test page',
        description: 'test page'
    }
};

const Page = () => {
    return <ClientPage />;
};

export default Page;

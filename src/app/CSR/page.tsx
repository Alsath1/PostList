import { Metadata } from 'next';

import HomeClient from './pageClient';

export const metadata: Metadata = {
    title: 'CSR - Клиентский рендеринг',
    description: 'Отображение SSR SSG CSR ISR',

    openGraph: {
        title: 'CSR - Клиентский рендеринг',
        description: 'Отображение SSR SSG CSR ISR'
    }
};
export default function Home() {
    return <HomeClient />;
}

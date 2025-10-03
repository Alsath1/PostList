import './globals.sass';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { ModalList } from '@/appFsd/modal/ModalRoot';
import { ReduxProvider } from '@/appFsd/redux/Provider';
import { Header } from '@/widgets/Header';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin', 'cyrillic']
});

export const metadata: Metadata = {
    title: '%s - test',
    description: 'Отображение SSR SSG CSR ISR',

    openGraph: {
        title: '%s - test',
        description: 'Отображение SSR SSG CSR ISR'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${roboto.variable}`}>
                <ReduxProvider>
                    {/* <Header /> */}
                    <div className='childrenWrapper'>{children}</div>
                    <ModalList />
                </ReduxProvider>
            </body>
        </html>
    );
}

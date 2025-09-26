import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Выберите вид рендеринга',
    description: 'Отображение SSR SSG CSR ISR',

    openGraph: {
        title: 'Выберите вид рендеринга',
        description: 'Отображение SSR SSG CSR ISR'
    }
};
export default function Home() {
    return <h1>Выберите вид рендеринга в шапке сайта</h1>;
}

import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'ISR -Инкрементальный Статический рендеринг',
    description: 'Отображение SSR SSG CSR ISR',

    openGraph: {
        title: 'ISR -Инкрементальный Статический рендеринг',
        description: 'Отображение SSR SSG CSR ISR'
    }
};

import styles from '@/app/page.module.sass';
import { getPlaceholderDataISR } from '@/appFsd/api/getPlaceholderDataISR';
import { PostList } from '@/entities/posts/ui/PostList/PostList';
export default async function Home() {
    const data = await getPlaceholderDataISR({});

    return (
        <div className={styles.mainPage}>
            <h1>ISR</h1>
            {data && <PostList data={data} />}
        </div>
    );
}

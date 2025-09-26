import { Metadata } from 'next';

import styles from '@/app/page.module.sass';
import { getPlaceholderDataSSG } from '@/appFsd/api/getPlaceholderDataSSG';
import { PostList } from '@/entities/posts/ui/PostList/PostList';
export const metadata: Metadata = {
    title: 'SSG - Статический рендеринг',
    description: 'Отображение SSR SSG CSR ISR',

    openGraph: {
        title: 'SSG - Статический рендеринг',
        description: 'Отображение SSR SSG CSR ISR'
    }
};
export default async function Home() {
    const data = await getPlaceholderDataSSG({});

    return (
        <div className={styles.mainPage}>
            <h1>SSG</h1>
            {data && <PostList data={data} />}
        </div>
    );
}

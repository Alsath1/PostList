import { Metadata } from 'next';

import { getPlaceholderDataSSR } from '@/appFsd/api/getPlaceholderDataSSR';

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: `SSR, id: ${slug}  - Серверный рендеринг`,
        description: 'Инкрементальный Отображение SSR SSG CSR ISR',

        openGraph: {
            title: `SSR, id:${slug}  - Серверный рендеринг`,
            description: 'Отображение SSR SSG CSR ISR'
        }
    };
}

import styles from '@/app/page.module.sass';
import { PostList } from '@/entities/posts/ui/PostList/PostList';
export default async function Home({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = await getPlaceholderDataSSR({
        typeRequest: { cache: 'no-store', revalidate: 0 },
        id: Number(slug)
    });

    return (
        <div className={styles.mainPage}>
            <h1>SSR</h1>
            {data && <PostList data={[data]} />}
        </div>
    );
}

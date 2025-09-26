'use client';

import style from '@/app/page.module.sass';
import { useGetAllPostsQuery } from '@/appFsd/api/getPlaceholderData';
import { PostList } from '@/entities/posts/ui/PostList/PostList';

export default function HomeClient() {
    const { data, isLoading, isFetching, isSuccess } = useGetAllPostsQuery();
    if (isLoading || isFetching || !data) {
        return <div>Loading</div>;
    }
    return (
        <div className={style.mainPage}>
            <h1>CSR</h1>
            {isSuccess && <PostList data={data} />}
        </div>
    );
}

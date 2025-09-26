import { FC } from 'react';

import styles from '@/entities/posts/ui/PostList/PostList.module.sass';

import { TPostListProps } from '../../model/types';
import { PostCard } from '../PostCard/PostCard';

export const PostList: FC<TPostListProps> = ({ data }) => {
    if (!data) {
        return null;
    }
    return (
        <div suppressHydrationWarning className={styles.cardListWrapper}>
            {data?.map(el => (
                <PostCard key={el.id} {...el} />
            ))}
        </div>
    );
};

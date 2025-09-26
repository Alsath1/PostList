import { FC } from 'react';

import { TGetPlaceholderDataApi } from '@/appFsd/api/getPlaceholderData';
import styles from '@/entities/posts/ui/PostCard/PostCard.module.sass';

export const PostCard: FC<TGetPlaceholderDataApi> = Props => {
    const { id, body, title, userId } = Props;
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.headerWrapper}>
                <h2>{title}</h2>
                <span>{id}</span>
            </div>

            {body}

            {userId}
        </div>
    );
};

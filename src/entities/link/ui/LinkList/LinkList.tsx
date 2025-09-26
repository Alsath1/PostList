'use client';
import { FC } from 'react';

import style from '@/entities/link/ui/LinkList/LinkList.module.sass';

import { TLinkCardProps } from '../../model/types';
import { LinkCard } from '../LinkCard/LinkCard';

export const LinkList: FC<TLinkCardProps> = ({ data }) => {
    return (
        <nav className={style.linkListWrapper}>
            {data.map(el => (
                <LinkCard key={el.href} {...el} />
            ))}
        </nav>
    );
};

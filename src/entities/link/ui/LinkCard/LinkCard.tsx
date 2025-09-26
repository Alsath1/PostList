'use client';
import Link from 'next/link';
import { FC } from 'react';

import style from '@/entities/link/ui/LinkCard/LinkCard.module.sass';

import { TLinkCard } from '../../model/types';

export const LinkCard: FC<TLinkCard> = Props => {
    const { href, title, isActive } = Props;
    return (
        <Link
            className={style.linkCard}
            style={isActive ? { backgroundColor: '#6e6e6e' } : {}}
            href={href}
        >
            {title}
        </Link>
    );
};

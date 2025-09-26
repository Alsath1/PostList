'use client';
import { usePathname } from 'next/navigation';

import { HEADER_LINK } from '@/appFsd/config/config';
import { LinkList } from '@/entities/link/ui/LinkList/LinkList';
import { useMainModal } from '@/shared/lib/hooks/useActionModal';
import styles from '@/widgets/Header/ui/Header.module.sass';

export const Header = () => {
    const path = usePathname();
    const segment = path.split('/')[1];
    const linksWithActive = HEADER_LINK.map(link => ({
        ...link,
        isActive: link.href.split('/')[1] === segment
    }));
    const { open } = useMainModal();
    return (
        <header className={styles.headerWrapper}>
            <LinkList data={linksWithActive} />
            <button className={styles.openBtn} onClick={open}>модальное окно</button>
        </header>
    );
};

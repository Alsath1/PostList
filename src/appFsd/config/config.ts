import { T_HEADER_LINK } from '@/appFsd/types/d.types';

export const PAGES = {
    SSR: '/SSR/1',
    CSR: '/CSR',
    SSG: '/SSG',
    ISR: '/ISR'
};

export const HEADER_LINK: T_HEADER_LINK[] = [
    {
        title: 'SSR',
        href: PAGES.SSR
    },
    {
        title: 'CSR',
        href: PAGES.CSR
    },
    {
        title: 'SSG',
        href: PAGES.SSG
    },
    {
        title: 'ISR',
        href: PAGES.ISR
    }
];

export type TLinkCard = {
    href: string;
    title: string;
    isActive?: boolean;
};

export type TLinkCardProps = {
    data: TLinkCard[];
};

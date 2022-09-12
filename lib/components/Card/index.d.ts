interface CardProps {
    /**
     * Web property that will change card base styling
     */
    webProperty: 'originprotocol' | 'ousd' | 'story';
    /**
     *
     */
    title: string;
    body?: string;
    linkText?: string;
    linkHref?: string;
    imgSrc: string;
    imgAlt: string;
    thumbnailSrc?: string;
    thumbnailAlt?: string;
}
export declare const Card: ({ body, imgSrc, imgAlt, title, linkText, linkHref, thumbnailSrc, thumbnailAlt, webProperty, }: CardProps) => JSX.Element;
export {};

/// <reference types="react" />
interface OriginLogoProps {
    webProperty: 'originprotocol' | 'ousd' | 'story';
    height?: number;
    theme?: 'light' | 'dark';
}
declare const OriginLogo: ({ webProperty, height, theme }: OriginLogoProps) => JSX.Element;
export default OriginLogo;

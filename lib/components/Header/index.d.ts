/// <reference types="react" />
interface HeaderProps {
    webProperty: 'originprotocol' | 'ousd' | 'story';
    language?: string;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Header: ({ webProperty, language, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element;
export {};

/// <reference types="react" />
declare type Options = {
    label: string;
    href: string;
    highlight?: boolean;
};
interface DropdownProps {
    /**
     * Dropdown options
     */
    options: Options[];
    /**
     * Label to show for dropdown button
     */
    label: string;
    /**
     * Text to highlight above dropdown
     */
    highlightText?: string;
    /**
     * Should the dropdown menu align to the right?
     */
    alignRight?: boolean;
    /**
     * Should bolding match the current selection, should all options be bold, or should none be bold?
     */
    bolding?: 'selection' | 'none' | 'all';
    /**
     * Additional classes passed to Dropdown top level component
     */
    classes?: string;
    /**
     * Additional styling passed to Dropdown top level component
     */
    style?: object;
}
export declare const Dropdown: ({ options, label, highlightText, alignRight, bolding, classes, style, }: DropdownProps) => JSX.Element;
export {};

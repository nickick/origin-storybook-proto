/// <reference types="react" />
interface ButtonProps {
    /**
     * What type of button is this?
     */
    type?: 'primary' | 'secondary' | 'header';
    /**
     * What property is this button for?
     */
    webProperty?: 'originprotocol' | 'ousd' | 'story';
    /**
     * What background color to use.
     * Will override background colors/gradients derived from other props.
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ type, webProperty, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
export {};

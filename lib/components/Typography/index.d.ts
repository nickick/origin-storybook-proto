import React, { Component } from 'react';
interface TypographyProps {
    /**
     * Children to wrap with typography styling
     */
    children: React.ReactNode;
    /**
     * Additional classes to add onto ones supplied by typography componnent
     */
    classes?: string;
    /**
     * Additional styling to add onto typography component
     */
    styles?: object;
    /**
     * Tag type to use
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'q' | 'code' | 'a';
    /**
     * Tag type to default to if not tag type supplied
     */
    defaultAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'q' | 'code' | 'a';
    /**
     * Href for links
     */
    href?: string;
}
export declare class Typography extends Component<TypographyProps> {
    static H1: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static H2: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static H3: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static H4: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static H5: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static H6: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static H7: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static Body: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static Body2: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static Title: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static Caption: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static Label: ({ children, classes, styles, as }: TypographyProps) => JSX.Element;
    static Link: ({ children, classes, styles, as, href, }: TypographyProps) => JSX.Element;
    render(): JSX.Element;
}
export {};

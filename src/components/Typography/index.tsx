import React, { Component } from 'react'

interface TypographyProps {
  /**
   * Children to wrap with typography styling
   */
  children: React.ReactNode
  /**
   * Additional classes to add onto ones supplied by typography componnent
   */
  classes?: string
  /**
   * Additional styling to add onto typography component
   */
  styles?: object
  /**
   * Tag type to use
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'q' | 'code' | 'a' | 'div'
  /**
   * Tag type to default to if not tag type supplied
   */
  defaultAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'q' | 'code' | 'a' | 'div'
  /**
   * Href for links
   */
  href?: string
}

const GenericTypography = ({
  children,
  classes,
  styles,
  defaultAs,
  as,
  href,
}: TypographyProps) => {
  const Tag = `${as || defaultAs || 'span'}` as keyof JSX.IntrinsicElements

  if (href) {
    return (
      <a 
        href={href} 
        target='_blank'
        className={`${classes}`} 
        style={{...(styles || {})}} 
      >
        <Tag 
        >
          {children}
        </Tag>
      </a>
    )
  } else {
    return (
      <Tag 
        className={`${classes}`} 
        style={{...(styles || {})}} 
      >
        {children}
      </Tag>
    )
  }

}

export class Typography extends Component<TypographyProps> {
  static H1 = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansSailec font-bold text-8xl ${classes}`} styles={styles} as={as} defaultAs='h1'>
        {children}
      </GenericTypography>
    )
  }

  static H2 = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansSailec font-bold text-7xl ${classes}`} styles={styles} as={as} defaultAs='h2'>
        {children}
      </GenericTypography>
    )
  }

  static H3 = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansSailec font-bold text-6xl ${classes}`} styles={styles} as={as} defaultAs='h3'>
        {children}
      </GenericTypography>
    )
  }

  static H4 = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansSailec font-bold text-5xl ${classes}`} styles={styles} as={as} defaultAs='h4'>
        {children}
      </GenericTypography>
    )
  }

  static H5 = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansSailec font-bold text-4xl ${classes}`} styles={styles} as={as} defaultAs='h5'>
        {children}
      </GenericTypography>
    )
  }

  static H6 = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansSailec font-bold text-3xl ${classes}`} styles={styles} as={as} defaultAs='h6'>
        {children}
      </GenericTypography>
    )
  }

  static H7 = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansSailec font-bold text-2xl ${classes}`} styles={styles} as={as} defaultAs='h6'>
        {children}
      </GenericTypography>
    )
  }

  static Body = ({
    children,
    classes,
    styles,
    href,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansInter font-bold text-xl ${classes}`} styles={styles} as={as} defaultAs='p' href={href}>
        {children}
      </GenericTypography>
    )
  }

  static Body2 = ({
    children,
    classes,
    styles,
    href,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansInter font-normal text-base ${classes}`} styles={styles} as={as} defaultAs='p' href={href}>
        {children}
      </GenericTypography>
    )
  }

  static Title = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansInter font-bold text-base ${classes}`} styles={styles} as={as} defaultAs='p'>
        {children}
      </GenericTypography>
    )
  }

  static Caption = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansInter font-normal text-sm ${classes}`} styles={styles} as={as} defaultAs='p'>
        {children}
      </GenericTypography>
    )
  } 

  static Label = ({
    children,
    classes,
    styles,
    as
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansInter font-bold text-sm uppercase ${classes}`} styles={styles} as={as} defaultAs='span'>
        {children}
      </GenericTypography>
    )
  }

  static Link = ({
    children,
    classes,
    styles,
    as,
    href,
  }: TypographyProps) => {
    return (
      <GenericTypography classes={`font-sansInter font-bold text-base text-link-blue ${classes}`} styles={styles} as={as} defaultAs='p' href={href}>
        {children}
      </GenericTypography>
    )
  }

  render () {
    return (
      <Typography.Body {...this.props} />
    )
  }
}
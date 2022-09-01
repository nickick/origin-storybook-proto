import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * What type of button is this?
   */
  type?: 'primary' | 'secondary'
  /**
   * What property is this button for?
   */
  webProperty?: 'originprotocol' | 'OUSD' | 'story'
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
export const Button = ({
  type = 'primary',
  webProperty = 'originprotocol',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  let background
  let textColor

  switch (webProperty) {
    case 'originprotocol':
      background = type === 'primary' 
        ? 'bg-gradient-to-r from-origin-protocol-button-start to-origin-protocol-button-end'
        : 'bg-white' 
      textColor = type === 'primary'
        ? 'text-white'
        : 'text-black'
      break

    case 'OUSD':
      background = type === 'primary' 
        ? 'bg-gradient-to-r from-ousd-button-start to-ousd-button-end'
        : 'bg-gradient-to-r from-ousd-button-dark-start to-ousd-button-dark-end'
      textColor = 'text-white'
      break;
    
    case 'story':
      background = type === 'primary' 
        ? 'bg-gradient-to-r from-story-button-start to-story-button-end'
        : 'bg-white' 
      textColor = type === 'primary'
        ? 'text-white'
        : 'text-story-blue'
      break
  
    default:
      break
  }

  let textSize
  let padding
  switch (size) {
    case 'small':
      textSize = 'text-base'
      padding = 'px-4 py-1'
      break

    case 'medium':
      textSize = 'text-base'
      padding = 'px-6 py-1'
      break

    case 'large':
      textSize = 'text-2xl'
      padding = 'py-6 px-12'
      break

    default:
      break
  }

  return (
    <button
      type="button"
      className={`
        ${background}
        ${backgroundColor}
        ${textColor}
        ${textSize} 
        ${padding}
        leading-7
        shadow
        font-sans
        rounded-full
        font-medium
      `}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

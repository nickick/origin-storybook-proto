interface ButtonProps {
  /**
   * What type of button is this?
   */
  type?: 'primary' | 'secondary' | 'header'
  /**
   * What property is this button for?
   */
  webProperty?: 'originprotocol' | 'ousd' | 'story'
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
  /**
   * What additional classes should be used?
   * Will add onto classes derived from other props.
   */
   className?: string;
  /**
   * What additional styles should be used?
   * Will override background colors/gradients derived from other props.
   */
   style?: object;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  webProperty = 'originprotocol',
  size = 'medium',
  label,
  className = '',
  style = {},
  ...props
}: ButtonProps) => {
  let background
  let textColor
  let hoverStyles

  switch (webProperty) {
    case 'originprotocol':
      background = type === 'primary' 
        ? 'bg-gradient-to-r from-origin-protocol-button-start to-origin-protocol-button-end'
        : 'bg-white' 
      textColor = type === 'primary'
        ? 'text-white'
        : 'text-black'
      hoverStyles = type === 'primary'
        ? 'hover:bg-gray-50 hover:text-gray-100'
        : 'hover:bg-gray-50'
      break

    case 'ousd':
      background = type === 'primary' 
        ? 'bg-gradient-to-r from-ousd-button-start to-ousd-button-end'
        : type === 'secondary'
        ? 'bg-gradient-to-r from-ousd-button-dark-start to-ousd-button-dark-end'
        : ''
      textColor = 'text-white'
      hoverStyles = 'hover:bg-gray-900 hover:text-gray-100'
      break;
    
    case 'story':
      background = type === 'primary' 
        ? 'bg-gradient-to-r from-story-button-start to-story-button-end'
        : 'bg-white' 
      textColor = type === 'primary'
        ? 'text-white'
        : 'text-story-blue'
      hoverStyles = type === 'primary'
        ? 'hover:bg-gray-50 hover:text-gray-100'
        : 'hover:bg-gray-50'
      break
  
    default:
      break
  }

  let textSize
  let padding
  switch (size) {
    case 'small':
      textSize = 'text-base'
      padding = 'px-7 py-1'
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

  let fontWeight
  let shadow
  let rounding
  switch (type) {
    case 'header':
      fontWeight = 'font-normal'
      shadow = ''
      rounding = ''
      padding = 'px-4 py-1'
      break

    default:
      fontWeight = 'font-medium'
      shadow = 'shadow'
      rounding = 'rounded-full'
      break
  }

  return (
    <button
      type="button"
      className={`
        ${background}
        ${textColor}
        ${textSize} 
        ${padding}
        ${fontWeight}
        ${shadow}
        ${rounding}
        ${hoverStyles}
        leading-7
        font-sans
        animate-gradient
        background-gradient-oversized
        ${className}
      `}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};

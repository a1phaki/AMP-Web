import { useState } from 'react';

function HoverIconButton({ label, defaultIcon, hoverIcon, onClick, className, iconStyle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverIcon : defaultIcon} alt="icon" width="27" style={iconStyle} />
      {label}
    </button>
  );
}

export default HoverIconButton;

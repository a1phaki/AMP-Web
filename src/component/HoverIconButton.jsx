import { useState } from 'react';
import PropTypes from 'prop-types';

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
HoverIconButton.propTypes = {
  label: PropTypes.node,
  defaultIcon: PropTypes.string.isRequired,
  hoverIcon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconStyle: PropTypes.object,
};

export default HoverIconButton;

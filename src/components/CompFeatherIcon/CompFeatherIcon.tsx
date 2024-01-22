import React, { ReactElement } from 'react';

interface CompFeatherIconProps {
  icon: ReactElement;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const CompFeatherIcon: React.FC<CompFeatherIconProps> = ({ icon, size = 24, color = 'currentColor', onClick }) => {
  return React.cloneElement(icon, {
    size,
    color,
    onClick
  });
};


export default CompFeatherIcon;

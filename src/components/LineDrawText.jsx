import React, { useState } from 'react';

const LineDrawText = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative inline-block">
      <span
        className={`absolute ${
          isHovered ? 'w-full bg-[#00E5FF]' : 'w-0'
        } h-1 transition-all duration-300`}
        style={{
          top: '-5px',
          left: '0',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Hover Me
      </span>
    </div>
  );
};

export default LineDrawText;

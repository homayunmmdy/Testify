"use client"
import React, { useState } from 'react';

interface Props {
    tooltipText: string ;
    children : React.ReactNode
}

const Tooltip: React.FC<Props> = ({ tooltipText, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center my-5">
      {isHovered && (
        <span aria-label='tooltip-text' className="absolute bottom-10 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded">
          {tooltipText}
        </span>
      )}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        {children}
      </button>
    </div>
  );
};

export default Tooltip;

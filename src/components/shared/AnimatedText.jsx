'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AnimatedText() {
  const [cursorPosition, setCursorPosition] = useState(-1); // Track the cursor position (-1 means no hover)
  const text = "REALBOT";

  const handleMouseMove = (e) => {
    const textElement = e.currentTarget;
    const boundingRect = textElement.getBoundingClientRect();
    const x = e.clientX - boundingRect.left; // Get X position relative to the text
    const letterWidth = boundingRect.width / text.length;
    const position = Math.floor(x / letterWidth); // Determine the hovered letter index
    setCursorPosition(position >= 0 && position < text.length ? position : -1); // Set -1 if outside
  };

  const handleMouseLeave = () => {
    setCursorPosition(-1); // Reset cursor position on mouse leave
  };

  return (
    <div className="relative group">
      <svg
        viewBox="0 0 800 200"
        className="w-full mx-auto"
        style={{ filter: 'drop-shadow(0 0 0.5rem rgba(0,0,0,0.5))' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {text.split('').map((_, index) => (
              <stop
                key={index}
                offset={`${(index / text.length) * 100}%`}
                stopColor={cursorPosition === index ? '#0066ff' : '#808080'}
              />
            ))}
            <stop
              offset="100%"
              stopColor={cursorPosition === text.length ? '#0066ff' : '#808080'}
            />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="none"
          stroke="url(#textGradient)"
          strokeWidth="1"
          className="text-[8rem] font-bold transition-all duration-500"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

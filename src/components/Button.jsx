// src/components/ui/Button.jsx
import React from 'react';

export function Button({ children, className = '', variant = 'default', ...props }) {
  const baseStyle = 'px-4 py-2 rounded-lg font-medium focus:outline-none transition';
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'bg-transparent text-red-600 hover:bg-red-100',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

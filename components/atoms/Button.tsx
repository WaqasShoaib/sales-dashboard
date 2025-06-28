import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
    {...props}
  >
    {children}
  </button>
);

export default Button;

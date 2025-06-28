import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => (
  <input
    className="px-2 py-1 border rounded w-full"
    {...props}
  />
);

export default Input;

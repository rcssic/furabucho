import React from 'react';
import './style.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const NeumorphicInput: React.FC<Props> = (props) => {
  return <input className="neo-input" {...props} />;
};

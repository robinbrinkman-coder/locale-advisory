import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, type = 'button', variant = 'primary' }: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded transition-all duration-200";
  const variantClasses = variant === 'primary' 
    ? "bg-[#E6B450] text-white hover:bg-[#C89E3D]" 
    : "bg-transparent border border-[#4A372A] text-[#4A372A] hover:bg-[#4A372A] hover:text-[#F4EDE2]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
}

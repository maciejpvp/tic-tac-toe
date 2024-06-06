import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  const baseClasses =
    "bg-stone-300 text-stone-800 h-10 w-64 rounded transition-all duration-200 hover:bg-stone-400 active:bg-stone-200";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className || ""}`} // Dodanie przekazanych klas
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-stone-300 text-stone-800 h-10 w-64 rounded hover:bg-stone-400 active:bg-stone-200 transition-all duration-200"
    >
      {children}
    </button>
  );
};

export default Button;

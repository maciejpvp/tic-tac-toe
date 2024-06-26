interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      className="w-20 h-20 bg-stone-200 gap-2 text-stone-800 border-2 border-stone-800"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

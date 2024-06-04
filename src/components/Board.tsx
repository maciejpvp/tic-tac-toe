import Square from "./Square";
import BoardRow from "./BoardRow";

interface BoardProps {
  squares: (string | null)[];
  // eslint-disable-next-line
  onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: BoardProps) => {
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </div>
  );
};

export default Board;

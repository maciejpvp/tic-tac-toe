import { useState, useEffect } from "react";
import Board from "./Board";
import { calculateWinner, findBestMove } from "../utils/ai";
import Modal from "./Modal";
import Hud from "./Hud";
import Button from "./Button";

type GameProps = {
  gameType: number;
};

const Game = ({ gameType }: GameProps) => {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);
  const [xStarts, setXStarts] = useState(true);

  const winner = calculateWinner(squares);

  useEffect(() => {
    if (gameType === 0 && !xIsNext && !winner) {
      const bestMove = findBestMove(squares, "easy");
      if (bestMove !== -1) {
        const newSquares = squares.slice();
        newSquares[bestMove] = "O";
        setSquares(newSquares);
        setXIsNext(true);
      }
    }
  }, [xIsNext, winner, squares, gameType]);

  const handleClick = (i: number) => {
    if (winner || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(!xStarts);
    setXStarts((prev) => !prev);
  };

  const isFilled = squares.every(
    (element) => element !== null && element !== undefined
  );

  return (
    <div className="content-center flex-row">
      {!winner && <Hud xIsNext={xIsNext} />}
      <Modal show={!!winner || isFilled}>
        <h1 className="text-5xl">
          {isFilled ? "Draw😒" : winner && `Player ${winner} Won!😎`}
        </h1>
        <Button onClick={handleReset}>Play Again</Button>
      </Modal>
      <Board squares={squares} onClick={handleClick} />
    </div>
  );
};

export default Game;

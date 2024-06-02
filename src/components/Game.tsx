import React, { useState, useEffect } from "react";
import Board from "./Board";
import { calculateWinner, findBestMove } from "../utils/ai";

const Game: React.FC = () => {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current);

  useEffect(() => {
    if (!xIsNext && !winner) {
      const squares = current.slice();
      const bestMove = findBestMove(squares);
      if (bestMove !== -1) {
        squares[bestMove] = "O";
        setHistory(history.concat([squares]));
        setStepNumber(stepNumber + 1);
        setXIsNext(true);
      }
    }
  }, [xIsNext, winner, current, history, stepNumber]);

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.slice();

    if (winner || squares[i]) {
      return;
    }

    squares[i] = "X";
    setHistory(newHistory.concat([squares]));
    setStepNumber(newHistory.length);
    setXIsNext(false);
  };

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="content-center flex-row">
      <div className="game-info text-3xl">
        <div>{status}</div>
      </div>
      <div className="">
        <Board squares={current} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Game;

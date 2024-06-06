import { useState, useEffect } from "react";

import Board from "./Board";

import { calculateWinner, findBestMove } from "../utils/ai";

import Modal from "./Modal";

import Hud from "./Hud";

import Button from "./Button";

import { useSelector } from "react-redux";

import { RootState } from "../utils/store";

const Game = () => {
  const { gameType, isPlayingX } = useSelector(
    (state: RootState) => state.settings
  );

  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  const makeComputerMove = (player: "X" | "O") => {
    const bestMove = findBestMove(squares, "impossible");

    if (bestMove !== -1) {
      const newSquares = squares.slice();

      newSquares[bestMove] = player;

      setSquares(newSquares);

      setXIsNext((prev) => !prev);
    }
  };

  console.log({ gameType, xIsNext, isPlayingX, winner });

  useEffect(() => {
    if (gameType === 0 && xIsNext !== isPlayingX && !winner) {
      makeComputerMove(isPlayingX ? "O" : "X");
    }

    // eslint-disable-next-line
  }, [xIsNext, gameType, isPlayingX, winner, squares]);

  useEffect(() => {
    setXIsNext(isPlayingX);
  }, [isPlayingX]);

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
    const initialSquares = Array(9).fill(null);

    setSquares(initialSquares);

    setXIsNext(true);
  };

  const isFilled = squares.every(
    (element) => element !== null && element !== undefined
  );

  return (
    <div className="flex flex-col justify-center">
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

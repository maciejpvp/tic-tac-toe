export const calculateWinner = (squares: (string | null)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const findBestMoveEasy = (squares: (string | null)[]) => {
  const emptyIndices = squares.reduce<number[]>((acc, square, idx) => {
    if (!square) acc.push(idx);
    return acc;
  }, []);
  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
};

const findBestMoveMedium = (squares: (string | null)[]) => {
  const emptyIndices = squares.reduce<number[]>((acc, square, idx) => {
    if (!square) acc.push(idx);
    return acc;
  }, []);

  // Try to block the opponent's winning move
  for (let i = 0; i < emptyIndices.length; i++) {
    const idx = emptyIndices[i];
    squares[idx] = "X";
    if (calculateWinner(squares) === "X") {
      squares[idx] = null;
      return idx;
    }
    squares[idx] = null;
  }

  // Pick the center if available
  if (squares[4] === null) {
    return 4;
  }

  // Pick a random empty square
  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
};

const minimax = (
  squares: (string | null)[],
  depth: number,
  isMaximizing: boolean,
  maxDepth: number
): number => {
  const winner = calculateWinner(squares);
  if (winner === "X") return -10 + depth;
  if (winner === "O") return 10 - depth;
  if (squares.every((square) => square !== null)) return 0;
  if (depth >= maxDepth) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = "O";
        const score = minimax(squares, depth + 1, false, maxDepth);
        squares[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = "X";
        const score = minimax(squares, depth + 1, true, maxDepth);
        squares[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const findBestMoveHard = (squares: (string | null)[]) => {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      squares[i] = "O";
      const score = minimax(squares, 0, false, 3); // Limiting depth to 3
      squares[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

const findBestMoveImpossible = (squares: (string | null)[]) => {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      squares[i] = "O";
      const score = minimax(squares, 0, false, Infinity);
      squares[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export const findBestMove = (
  squares: (string | null)[],
  difficulty: "easy" | "medium" | "hard" | "impossible"
) => {
  switch (difficulty) {
    case "easy":
      return findBestMoveEasy(squares);
    case "medium":
      return findBestMoveMedium(squares);
    case "hard":
      return findBestMoveHard(squares);
    case "impossible":
      return findBestMoveImpossible(squares);
    default:
      throw new Error(`Unknown difficulty level: ${difficulty}`);
  }
};

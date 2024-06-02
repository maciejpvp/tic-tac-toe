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

export const findBestMove = (squares: (string | null)[]) => {
  const emptyIndices = squares.reduce<number[]>((acc, square, idx) => {
    if (!square) acc.push(idx);
    return acc;
  }, []);

  if (emptyIndices.length === 0) return -1;

  // Simple AI: pick the first available square
  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
};

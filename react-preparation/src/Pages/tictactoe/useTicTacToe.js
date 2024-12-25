import { useMemo, useState } from "react";

const useTictacToe = (gridSize = 3) => {
  const initialBoard = useMemo(
    () => Array(gridSize * gridSize).fill(null),
    [gridSize]
  );
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = useMemo(() => {
    const patterns = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(i * gridSize + j);
      }
      patterns.push(row);
    }

    for (let i = 0; i < gridSize; i++) {
      const cols = [];
      for (let j = 0; j < gridSize; j++) {
        cols.push(j * gridSize + i);
      }
      patterns.push(cols);
    }

    const diagonal1 = [];
    for (let i = 0; i < gridSize; i++) {
      diagonal1.push(i * gridSize + i);
    }
    patterns.push(diagonal1);

    const diagonal2 = [];
    for (let i = 0; i < gridSize; i++) {
      diagonal2.push(i * gridSize + (gridSize - 1 - i));
    }
    patterns.push(diagonal2);

    return patterns;
  }, [gridSize]);

  const handleClick = (index) => {
    let winner = calculateWinner(board);
    if (winner || board[index]) return;
    let newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    setIsXNext(!isXNext);
  };

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const pattern = WINNING_PATTERNS[i];
      const [first, ...rest] = pattern;

      if (
        currentBoard[first] &&
        rest.every((index) => currentBoard[index] === currentBoard[first])
      ) {
        return currentBoard[first];
      }
    }

    return null;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  return {
    board,
    calculateWinner,
    handleClick,
    resetGame,
    getStatusMessage,
  };
};

export default useTictacToe;

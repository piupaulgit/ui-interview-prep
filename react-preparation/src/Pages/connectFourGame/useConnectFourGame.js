import { useMemo, useState } from "react";

const useConnectFourGame = (rows, cols, winningCondition) => {
  const initialBoard = useMemo(() => {
    return Array(rows * cols).fill(null);
  }, [rows, cols]);
  const [board, setBoard] = useState(initialBoard);
  const gameSwitchBoard = Array(cols).fill(null);

  const [nextPlayer, setNextPlayer] = useState("red");

  const WINNING_PATTERNS = useMemo(() => {
    const patterns = [];

    // Rows
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j <= cols - winningCondition; j++) {
        const row = [];
        for (let k = 0; k < winningCondition; k++) {
          row.push(i * cols + j + k);
        }
        patterns.push(row);
      }
    }

    // Columns
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j <= rows - winningCondition; j++) {
        const col = [];
        for (let k = 0; k < winningCondition; k++) {
          col.push((j + k) * cols + i);
        }
        patterns.push(col);
      }
    }

    for (let i = 0; i <= rows - winningCondition; i++) {
      for (let j = 0; j <= cols - winningCondition; j++) {
        const diagonal1 = [];
        for (let k = 0; k < winningCondition; k++) {
          diagonal1.push((i + k) * cols + (j + k));
        }
        patterns.push(diagonal1);
      }
    }

    for (let i = 0; i <= rows - winningCondition; i++) {
      for (let j = winningCondition - 1; j < cols; j++) {
        const diagonal2 = [];
        for (let k = 0; k < winningCondition; k++) {
          diagonal2.push((i + k) * cols + (j - k));
        }
        patterns.push(diagonal2);
      }
    }

    return patterns;
  }, [rows, cols, winningCondition]);

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

  const boardGamePattern = () => {
    let patterns = [];
    for (let i = 0; i < cols; i++) {
      const col = [];
      for (let j = 0; j < rows; j++) {
        col.push(j * cols + i);
      }
      patterns.push(col);
    }

    return patterns;
  };

  const handleClick = (index) => {
    let winner = calculateWinner(board);
    if (winner) return;
    let column = boardGamePattern()[index];
    for (let i = column.length - 1; i >= 0; i--) {
      if (!board[column[i]]) {
        let newBoard = [...board];
        newBoard[column[i]] = nextPlayer;
        setBoard(newBoard);
        break;
      }
    }

    setNextPlayer(nextPlayer === "red" ? "yellow" : "red");
  };

  const getStatusMessage = () => {
    let winner = calculateWinner(board);
    if (winner) return `Winner is ${winner}`;
    if (!board.includes(null)) return "Draw";
    return `Next player ${nextPlayer} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard);
  };

  return {
    board,
    gameSwitchBoard,
    nextPlayer,
    handleClick,
    resetGame,
    getStatusMessage,
  };
};

export default useConnectFourGame;

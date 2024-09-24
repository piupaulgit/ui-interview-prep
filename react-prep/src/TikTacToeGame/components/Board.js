import React, { useEffect, useState } from "react";
const Board = () => {
  const [actionPlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinder();
  }, [gameBoard]);

  const handleCheck = (e) => {
    let index = e.target.getAttribute("data-index");
    setGameBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      if (actionPlayer === 1) {
        newBoard[index] = "o";
        setActivePlayer(2);
      } else {
        newBoard[index] = "x";
        setActivePlayer(1);
      }
      return newBoard;
    });
  };

  const checkWinder = () => {
    const winSequence = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winSequence.length; i++) {
      if (
        gameBoard[winSequence[i][0]] !== null &&
        gameBoard[winSequence[i][0]] === gameBoard[winSequence[i][1]] &&
        gameBoard[winSequence[i][1]] === gameBoard[winSequence[i][2]]
      ) {
        setTimeout(() => {
          if (gameBoard[winSequence[i][0]] === "o") {
            setWinner(1);
          } else {
            setWinner(2);
          }
        }, [100]);
      }
    }
  };

  const initiateGame = () => {
    setWinner(null);
  };

  return (
    <div className="board" onClick={handleCheck}>
      {winner ? (
        <div>
          <p>Winner Player {winner}</p>
          <button onClick={initiateGame}>Play again</button>
        </div>
      ) : (
        gameBoard.map((value, index) => {
          return (
            <div className="square" data-index={index} key={index}>
              {value === "o" && <span className="playerOne"></span>}
              {value === "x" && <span className="playerTwo"></span>}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Board;

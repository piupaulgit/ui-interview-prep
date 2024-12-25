import React from "react";
import useConnectFourGame from "./useConnectFourGame";
import "./connectFourGame.css";

const GameBoard = ({ rows, cols, winningCondition }) => {
  const {
    board,
    gameSwitchBoard,
    nextPlayer,
    handleClick,
    resetGame,
    getStatusMessage,
  } = useConnectFourGame(rows, cols, winningCondition);

  return (
    <div>
      <div className="connect-four-game-board">
        <p>{getStatusMessage()}</p>
        <div
          className="switch-board"
          style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}
        >
          {gameSwitchBoard.map((value, index) => {
            return (
              <button
                className={`cell ${nextPlayer === "red" ? "red" : "yellow"}`}
                key={index}
                onClick={() => handleClick(index)}
              ></button>
            );
          })}
        </div>
        <div
          className="game-board"
          style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}
        >
          {board.map((value, index) => {
            return <button className={`cell ${value}`} key={index}></button>;
          })}
        </div>
        <div className="others">
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    </div>
  );
};
const ConnectFourGame = () => {
  return (
    <div>
      <h2>Counnect Four Game</h2>
      <GameBoard rows={6} cols={7} winningCondition={4} />
    </div>
  );
};

export default ConnectFourGame;

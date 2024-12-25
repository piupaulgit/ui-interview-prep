import React, { useEffect, useState } from "react";
import "./tictactoe.css";
import useTictacToe from "./useTicTacToe";

const TicTacToeGameBoard = ({ gridSize }) => {
  const { board, handleClick, resetGame, getStatusMessage } =
    useTictacToe(gridSize);

  return (
    <div>
      <h4>{getStatusMessage()}</h4>
      <div
        className="tictactoe-game-board"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          maxWidth: `${gridSize * 100}px`,
        }}
      >
        {board.map((mark, index) => {
          return (
            <button
              className={`cell  ${mark === "X" && "blue"} ${
                mark === "O" && "red"
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {mark}
            </button>
          );
        })}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

const TicTacToe = () => {
  return (
    <div>
      <h2>Tic Tac Toe Game</h2>
      <TicTacToeGameBoard gridSize={3} />
    </div>
  );
};

export default TicTacToe;

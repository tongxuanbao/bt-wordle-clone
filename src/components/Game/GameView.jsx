import Keyboard from "components/Keyboard";
import Mainboard from "components/Mainboard";
import { useState } from "react";

const GameView = ({ gameState, keyState, answer, handleClick }) => {
  return (
    <div className="Game">
      <Mainboard gameState={gameState} answer={answer} />
      <Keyboard keyState={keyState} handleClick={handleClick} />
    </div>
  );
};

export default GameView;

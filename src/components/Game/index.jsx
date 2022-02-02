import Keyboard from "components/Keyboard";
import Mainboard from "components/Mainboard";
import { useState } from "react";

const addLetterToState = (state, letter, row) => {
  if (state[row].length >= 5) return state.slice(0, 4);
  state[row] = state[row] + letter;
  return state;
};

const Game = () => {
  const [gameState, setGameState] = useState(["", "", "", "", ""]);
  const [curRow, setCurRow] = useState(0);
  const handleClick = (letter) => {
    console.log("blabla");
    setGameState(addLetterToState(gameState, letter, curRow));
  };

  return (
    <div className="Game">
      <Mainboard gameState={gameState} />
      <Keyboard onClick={handleClick} />
    </div>
  );
};

export default Game;

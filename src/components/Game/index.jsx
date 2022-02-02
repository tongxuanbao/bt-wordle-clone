import Keyboard from "components/Keyboard";
import Mainboard from "components/Mainboard";
import { useState, createContext } from "react";

// const addLetterToState = (state, letter, row) => {
//   if (state[row].length >= 5) return state.slice(0, 4);
//   state[row] = state[row] + letter;
//   return state;
// };

export const gameContext = createContext();

const Game = () => {
  const [gameState, setGameState] = useState({
    guesses: ["", "", "", "", ""],
    curRow: 0,
  });

  const [answer, setAnswer] = useState("laser");

  const addLetter = (letter) => {
    const { guesses, curRow } = gameState;
    const guess = guesses[curRow];
    const newGuesses = guesses.slice();
    if (letter === "Del") {
      newGuesses[curRow] = guess.slice(0, Math.max(0, guess.length - 1));
    } else if (guess.length >= 5) {
      newGuesses[curRow] = guess.slice(0, 5);
    } else {
      newGuesses[curRow] = guess + letter;
    }
    setGameState({ guesses: newGuesses, curRow: curRow });
  };

  return (
    <gameContext.Provider value={[gameState, addLetter]}>
      <div className="Game">
        <Mainboard />
        <Keyboard />
      </div>
    </gameContext.Provider>
  );
};

export default Game;

import Keyboard from "components/Keyboard";
import Mainboard from "components/Mainboard";
import { useState, useEffect } from "react";
import "styles/Game.css";

const initialState = {
  guesses: ["", "", "", "", "", ""],
  status: ["ddddd", "ddddd", "ddddd", "ddddd", "ddddd", "ddddd"], //default, right, wrong, close
  curRow: 0,
};

const Game = ({ openResultModal, answer }) => {
  const [gameState, setGameState] = useState({ ...initialState });

  const handleClick = (letter) => {
    const { guesses, status, curRow } = gameState;
    const guess = guesses[curRow];
    const newGuesses = guesses.slice();
    if (letter === "Enter") {
      handleSubmit();
      return;
    }
    if (letter === "Del") {
      newGuesses[curRow] = guess.slice(0, Math.max(0, guess.length - 1));
    } else if (guess.length >= 5) {
      newGuesses[curRow] = guess.slice(0, 5);
    } else {
      newGuesses[curRow] = guess + letter;
    }
    setGameState({ guesses: newGuesses, status: status, curRow: curRow });
  };

  const handleSubmit = () => {
    const { guesses, status, curRow } = gameState;
    const guess = guesses[curRow];

    status[curRow] = guess
      .split("")
      .map((guessLetter, guessIndex) => {
        let curStatus = "w";
        answer.split("").forEach((answerLetter, answerIndex) => {
          if (guessLetter !== answerLetter || curStatus !== "w") return;
          if (guessIndex === answerIndex) curStatus = "r";
          else curStatus = "c";
        });
        return curStatus;
      })
      .join("");
    setGameState({ guesses: guesses, status: status, curRow: curRow + 1 });
    if (status[curRow] === "rrrrr") {
      openResultModal(true);
      setGameState({ ...initialState });
    }
  };

  return (
    <div className="Game">
      <Mainboard gameState={gameState} answer={answer} />
      <Keyboard onClick={handleClick} />
    </div>
  );
};

export default Game;

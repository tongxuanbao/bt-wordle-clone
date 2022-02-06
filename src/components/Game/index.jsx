import GameView from "./GameView";
import { useState, useEffect } from "react";
import "styles/Game.css";

const initialState = {
  guesses: ["", "", "", "", "", ""],
  status: ["ddddd", "ddddd", "ddddd", "ddddd", "ddddd", "ddddd"], //default, right, wrong, close
  curRow: 0,
};

const Game = ({ openResultModal, answer, validWords }) => {
  const resetState = () => {
    return JSON.parse(JSON.stringify(initialState));
  };

  const [gameState, setGameState] = useState(resetState());
  const [notAWord, setNotAWord] = useState(false);

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

  const checkGuess = (word) => {
    validWords.forEach((validWord) => {
      if (word === validWord) return true;
    });
    return false;
  };

  const handleSubmit = () => {
    const { guesses, status, curRow } = gameState;
    const guess = guesses[curRow];
    if (!checkGuess(guess)) {
      setNotAWord(true);
      return;
    }
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
  };

  useEffect(() => {
    const { status, curRow } = gameState;
    if (status[curRow - 1] === "rrrrr" || curRow >= 6) {
      openResultModal(true);
      setGameState(resetState());
    }
  }, [gameState.curRow]);

  return <GameView />;
};

export default Game;

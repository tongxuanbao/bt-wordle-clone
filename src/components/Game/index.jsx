import GameView from "components/Game/GameView";
import NotAWord from "components/Modals/NotAWord";
import ResultModal from "components/Modals/ResultModal";
import { useState, useEffect } from "react";
import "styles/Game.css";

const initialGameState = {
  guesses: ["", "", "", "", "", ""],
  //default, right, wrong, close
  status: ["ddddd", "ddddd", "ddddd", "ddddd", "ddddd", "ddddd"],
  curRow: 0,
};

const initialKeyState = {
  keyRow: ["qwertyuiop", "asdfghjkl", "+zxcvbnm-"],
  //default, right, wrong, close
  keyStatus: ["dddddddddd", "ddddddddd", "ddddddddd"],
};

const Game = ({ openResultModal, answer, validWords, resetGame }) => {
  // Core game state
  const [gameState, setGameState] = useState(
    JSON.parse(JSON.stringify(initialGameState))
  );
  const [keyState, setKeyState] = useState(
    JSON.parse(JSON.stringify(initialKeyState))
  );

  // Pop ups
  const [notAWord, setNotAWord] = useState(false);
  const [resultModal, setResultModal] = useState(false);

  // Function
  function resetState() {
    setGameState(JSON.parse(JSON.stringify(initialGameState)));
    setKeyState(JSON.parse(JSON.stringify(initialKeyState)));
  }

  function addLetter(letter) {
    const { guesses, curRow } = gameState;
    const newGuesses = guesses.slice();
    newGuesses[curRow] = (newGuesses[curRow] + letter).slice(0, 5);
    setGameState({ ...gameState, guesses: newGuesses });
  }

  function del() {
    const { guesses, curRow } = gameState;
    const newGuesses = guesses.slice();
    const guess = newGuesses[curRow];
    newGuesses[curRow] = guess.slice(
      0,
      guess.length > 0 ? guess.length - 1 : 0
    );
    setGameState({ ...gameState, guesses: newGuesses });
  }

  function submit() {
    const { guesses, status, curRow } = gameState;
    const { keyRow, keyStatus } = keyState;
    const guess = guesses[curRow];

    function getNewKeyStatus(guess, rowStatus) {
      let newKeyStatus = keyStatus.slice();
      function replaceAt(str, index, s) {
        if (index === -1 || str[index] === "r") return str;
        return str.slice(0, index) + s + str.slice(index + 1);
      }

      guess.split("").forEach((letter, index) => {
        newKeyStatus[0] = replaceAt(
          newKeyStatus[0],
          keyRow[0].indexOf(letter),
          rowStatus[index]
        );
        newKeyStatus[1] = replaceAt(
          newKeyStatus[1],
          keyRow[1].indexOf(letter),
          rowStatus[index]
        );
        newKeyStatus[2] = replaceAt(
          newKeyStatus[2],
          keyRow[2].indexOf(letter),
          rowStatus[index]
        );
      });
      return newKeyStatus;
    }

    function getNewStatus() {
      let curStatus = "";
      guess.split("").forEach((letter, index) => {
        let pos = -1;
        let stat = "w";
        while ((pos = answer.indexOf(letter, pos + 1)) != -1) {
          if (stat === "r") return;
          if (pos === index) stat = "r";
          else stat = "c";
        }
        curStatus += stat;
      });
      const newStatus = status.map((item, index) => {
        if (index === curRow) return curStatus;
        return item;
      });

      return newStatus;
    }

    if (!validWords.includes(guess) && answer != guess) {
      setNotAWord(true);
      return;
    }

    const newStatus = getNewStatus();
    const newKeyStatus = getNewKeyStatus(guess, newStatus[curRow]);

    if (newStatus[curRow] === "rrrrr") setResultModal(true);

    setGameState({ ...gameState, status: newStatus, curRow: curRow + 1 });
    setKeyState({ ...keyState, keyStatus: newKeyStatus });
  }

  function handleClick(letter) {
    if (letter === "Enter") submit();
    else if (letter === "Del") del();
    else addLetter(letter);
  }

  useEffect(() => {
    resetState();
  }, [answer]);

  return (
    <>
      <GameView
        gameState={gameState}
        keyState={keyState}
        answer={answer}
        handleClick={handleClick}
      />
      {resultModal && (
        <ResultModal
          openResultModal={setResultModal}
          answer={answer}
          resetGame={resetGame}
        />
      )}
      {notAWord && <NotAWord openNotAWord={setNotAWord} />}
    </>
  );
};

export default Game;

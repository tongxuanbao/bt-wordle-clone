import { useContext } from "react";
import { gameContext } from "components/Game";
import "styles/Keyboard.css";

const keyboardLayout = ["qwertyuiop", "asdfghjkl", "+zxcvbnm-"];

export const Key = ({ letter, onClick }) => {
  return (
    <button
      className="Key"
      onClick={() => {
        onClick(letter);
      }}
    >
      {letter}
    </button>
  );
};

const renderKey = ({ letter, onClick }) => {
  let convertedLetter = letter;
  if (letter === "+") convertedLetter = "Enter";
  if (letter === "-") convertedLetter = "Del";
  return <Key letter={convertedLetter} onClick={onClick} key={letter} />;
};

const Keyboard = ({ onClick, keyStatus }) => {
  return (
    <div className="Keyboard">
      {keyboardLayout.map((line) => {
        return (
          <div className="key-row">
            {line.split("").map((letter) => {
              return renderKey({
                letter: letter,
                onClick: onClick,
              });
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;

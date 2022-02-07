import { useContext } from "react";
import { gameContext } from "components/Game";
import "styles/Keyboard.css";

export const Key = ({ letter, onClick, status }) => {
  return (
    <button
      className={`Key ${status}`}
      onClick={() => {
        onClick(letter);
      }}
    >
      {letter.toUpperCase()}
    </button>
  );
};

const renderKey = ({ letter, onClick, status }) => {
  let convertedLetter = letter;
  if (letter === "+") convertedLetter = "Enter";
  else if (letter === "-") convertedLetter = "Del";
  let stat = "";
  if (status === "w") stat = "wrong-key";
  if (status === "r") stat = "right-key";
  if (status === "c") stat = "close-key";
  return (
    <Key
      letter={convertedLetter}
      onClick={onClick}
      status={stat}
      key={letter}
    />
  );
};

const Keyboard = ({ keyState, handleClick }) => {
  const { keyRow, keyStatus } = keyState;
  return (
    <div className="Keyboard">
      {keyRow.map((line, rowIndex) => {
        const rowStatus = keyStatus[rowIndex];
        return (
          <div className="key-row">
            {line.split("").map((letter, index) => {
              return renderKey({
                letter: letter,
                onClick: handleClick,
                status: rowStatus[index],
              });
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;

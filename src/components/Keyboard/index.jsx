import { useContext } from "react";
import { gameContext } from "components/Game";

const keyboardLayout = ["qwertyuiop", "asdfghjkl", "+zxcvbnm-"];

export const Key = (props) => {
  const [_, addLetter] = useContext(gameContext);
  return (
    <button
      className="Key"
      onClick={() => {
        console.log("clicked");
        addLetter(props.letter);
      }}
    >
      {props.letter}
    </button>
  );
};

const renderKey = (props) => {
  let convertedLetter = props.letter;
  if (props.letter === "+") convertedLetter = "Enter";
  if (props.letter === "-") convertedLetter = "Del";
  return <Key letter={convertedLetter} />;
};

const Keyboard = (props) => {
  return (
    <div className="Keyboard">
      {keyboardLayout.map((line) => {
        return (
          <div className="key-row">
            {line.split("").map((letter) => {
              return renderKey({ letter: letter, onClick: props.onClick });
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;

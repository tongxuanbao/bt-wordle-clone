const keyboardLayout = ["qwertyuiop", "asdfghjkl", "+zxcvbnm-"];

export const Key = (props) => {
  return (
    <button className="Key" onClick={props.onClick}>
      {props.letter}
    </button>
  );
};

const renderKey = (props) => {
  let convertedLetter = props.letter;
  if (props.letter === "+") convertedLetter = "Enter";
  if (props.letter === "-") convertedLetter = "Del";
  return (
    <Key letter={convertedLetter} onClick={() => props.onClick(props.letter)} />
  );
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

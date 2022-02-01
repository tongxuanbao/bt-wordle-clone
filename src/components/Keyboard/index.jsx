const keyboardLayout = ["qwertyuiop", "asdfghjkl", "+zxcvbnm-"];

const decomposeLineToButton = (line) => {
  return;
};

const Keyboard = () => {
  return (
    <div className="keyboard">
      {keyboardLayout.map((line) => {
        return (
          <div className="key">
            {line.split("").map((letter) => {
              if (letter === "+") {
                return <button>Enter</button>;
              } else if (letter === "-") {
                return <button>Del</button>;
              } else {
                return <button>{letter}</button>;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;

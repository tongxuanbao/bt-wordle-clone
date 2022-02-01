const keyboardLayout = ["qwertyuiop", "asdfghjkl", "+zxcvbnm-"];

export const Key = (props) => {
  return <button>{props.value}</button>;
};

const renderKey = (value) => {
  let convertedValue = value;
  if (value === "+") convertedValue = "Enter";
  if (value === "-") convertedValue = "Del";
  return <Key value={convertedValue} />;
};

const Keyboard = () => {
  return (
    <div className="Keyboard">
      {keyboardLayout.map((line) => {
        return (
          <div className="Key">
            {line.split("").map((letter) => {
              return renderKey(letter);
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;

import { useContext } from "react";
import { gameContext } from "components/Game";

export const Panel = (props) => {
  return <div className="Panel">{props.value}</div>;
};

const renderPanel = (i) => {
  return <Panel value={i.toUpperCase()} />;
};

const renderRow = (row) => {
  return (
    <div className="board-row">
      {row.split("").map((letter) => renderPanel(letter))}
    </div>
  );
};

const Mainboard = () => {
  const [{ guesses, curRow }, addLetter] = useContext(gameContext);
  return (
    <div className="Mainboard">
      {guesses.map((row) => renderRow(row.padEnd(5)))}
    </div>
  );
};

export default Mainboard;

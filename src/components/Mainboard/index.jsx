import { useContext } from "react";
import { gameContext } from "components/Game";

export const Panel = ({ value, answer }) => {
  return <div className={`Panel ${answer}`}>{value}</div>;
};

const renderPanel = (i, answer) => {
  return <Panel value={i.toUpperCase()} answer={answer} />;
};

const renderRow = (row, status) => {
  const fullStatus = status.split("").map((letter) => {
    if (letter === "w") return "wrong-panel";
    if (letter === "c") return "close-panel";
    if (letter === "r") return "right-panel";
  });
  return (
    <div className="board-row">
      {row
        .split("")
        .map((letter, index) => renderPanel(letter, fullStatus[index]))}
    </div>
  );
};

const Mainboard = ({ gameState }) => {
  const { guesses, status } = gameState;
  return (
    <div className="Mainboard">
      {guesses.map((row, index) => renderRow(row.padEnd(5), status[index]))}
    </div>
  );
};

export default Mainboard;

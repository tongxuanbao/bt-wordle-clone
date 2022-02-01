const gameState = ["l", "la", "las", "lase", "laser"];

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
  return (
    <div className="Mainboard">
      {gameState.map((row) => renderRow(row.padEnd(5)))}
    </div>
  );
};

export default Mainboard;

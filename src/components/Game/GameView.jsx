import Keyboard from "components/Keyboard";
import Mainboard from "components/Mainboard";
import NotAWord from "components/Modals/NotAWord";

const GameView = ({}) => {
  return (
    <div className="Game">
      <Mainboard gameState={gameState} answer={answer} />
      <Keyboard onClick={handleClick} />
      {notAWord && <NotAWord openNotAWord={setNotAWord} />}
    </div>
  );
};

export default GameView;

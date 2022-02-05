import "styles/Modal.css";

const RuleModal = ({ openRuleModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseButton">
          <button onClick={() => openRuleModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>HOW TO PLAY</h1>
        </div>
        <div className="body">
          <p>You guess the 5-letter WORD in 6 tries.</p>
          <p>
            Hit the enter button to submit and you'll see the color of the
            tiles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RuleModal;

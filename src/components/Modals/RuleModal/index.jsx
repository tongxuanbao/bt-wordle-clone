import "styles/Modal.css";
import Wrong from "assets/W.svg";
import Right from "assets/R.svg";
import Close from "assets/C.svg";

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
          <hr
            style={{
              width: "250px",
            }}
          />
          <h2>EXAMPLE</h2>
          <div className="example-row">
            <div className="example">
              <img src={Right} alt="Right example" />
              <h3>Right letter, Right position</h3>
            </div>
            <div className="example">
              <img src={Close} alt="Close example" />
              <h3>Right letter, Wrong position</h3>
            </div>
            <div className="example">
              <img src={Wrong} alt="Wrong example" />
              <h3>Wrong letter</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleModal;

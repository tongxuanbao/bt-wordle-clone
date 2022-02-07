import "styles/Modal.css";

const ResultModal = ({ openResultModal, answer, resetGame }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseButton">
          <button onClick={() => openResultModal(false)}> X </button>
        </div>
        <div className="title">
          <h3>The answer was</h3>
          <h1>{answer.toUpperCase()}</h1>
        </div>
        <div className="body">
          <p>Do you want to continue or share your result?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              resetGame();
              openResultModal(false);
            }}
          >
            Play Again
          </button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;

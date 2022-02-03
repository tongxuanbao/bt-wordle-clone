import React from "react";

const ResultModal = ({ closeResultModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeResultModal(false)}> X </button>
        <div className="title">
          <h1>You win or lose or somthing</h1>
        </div>
        <div className="body">
          <p>result here</p>
        </div>
        <div className="footer">
          <button>New game</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;

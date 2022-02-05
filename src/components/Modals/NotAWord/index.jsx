import "styles/Modal.css";

const NotAWord = ({ openNotAWord }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseButton">
          <button onClick={() => openNotAWord(false)}> X </button>
        </div>
        <div className="title">
          <h1>This is not a word</h1>
        </div>
      </div>
    </div>
  );
};

export default NotAWord;

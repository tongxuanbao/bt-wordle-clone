import "styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faCog } from "@fortawesome/free-solid-svg-icons";

const Header = ({ openRuleModal }) => {
  return (
    <header className="Header">
      <button className="Rules" onClick={() => openRuleModal(true)}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </button>
      <h1>WORDLE CLONE</h1>
      <button className="Settings">
        <FontAwesomeIcon icon={faCog} />
      </button>
    </header>
  );
};

export default Header;

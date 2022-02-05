const Header = ({ openRuleModal }) => {
  return (
    <header className="Header">
      <button onClick={() => openRuleModal(true)}> rules</button>
      <h1>WORDLE CLONEE</h1>
      <button>settings</button>
    </header>
  );
};

export default Header;

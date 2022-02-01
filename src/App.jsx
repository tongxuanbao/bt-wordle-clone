import logo from "./logo.svg";
import Header from "components/Header";
import Keyboard from "components/Keyboard";
import Mainboard from "components/Mainboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Mainboard />
      <Keyboard />
    </div>
  );
}

export default App;

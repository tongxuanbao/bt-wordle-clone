import logo from "./logo.svg";
import Header from "components/Header";
import Game from "components/Game";
import ResultModal from "components/Modals/ResultModal";
import RuleModal from "components/Modals/RuleModal";
import { useState } from "react";

import { initializeApp, getAnalytics } from "firebase/app";
import "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSCDi4mEyO2IjpPZ60oPxv63G5nLYT4XU",
  authDomain: "bt-wordle-clone.firebaseapp.com",
  projectId: "bt-wordle-clone",
  storageBucket: "bt-wordle-clone.appspot.com",
  messagingSenderId: "1091901913299",
  appId: "1:1091901913299:web:3424b724818268d0473c26",
  measurementId: "G-Z5PX4D260Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const App = () => {
  const [resultModal, setResultModal] = useState(false);
  const [ruleModal, setRuleModal] = useState(false);
  const [answer, setAnswer] = useState("words");
  return (
    <div className="App">
      <Header openRuleModal={setRuleModal} />
      <Game openResultModal={setResultModal} answer={answer} />
      {resultModal && (
        <ResultModal openResultModal={setResultModal} answer={answer} />
      )}
      {ruleModal && <RuleModal openRuleModal={setRuleModal} />}
    </div>
  );
};

export default App;

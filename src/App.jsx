import logo from "./logo.svg";
import Header from "components/Header";
import Game from "components/Game";
import ResultModal from "components/Modals/ResultModal";
import RuleModal from "components/Modals/RuleModal";
import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";
import "firebase/firestore";

import { useDocumentOnce } from "react-firebase-hooks/firestore";

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

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const App = () => {
  const docRef = doc(getFirestore(app), "words", "0NpBTT1jGKuZtNVpP8PO");
  const [value, loading, error] = useDocumentOnce(docRef);

  const [resultModal, setResultModal] = useState(false);
  const [ruleModal, setRuleModal] = useState(false);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    if (value != undefined) {
      const words = value.data().words;
      setAnswer(words[getRandomInt(words.length)]);
    }
  }, [value]);

  return (
    <div className="App">
      {value && (
        <>
          <Header openRuleModal={setRuleModal} />
          <Game
            openResultModal={setResultModal}
            answer={answer}
            validWords={value.data().guessWords}
          />
          {resultModal && (
            <ResultModal openResultModal={setResultModal} answer={answer} />
          )}
          {ruleModal && <RuleModal openRuleModal={setRuleModal} />}
        </>
      )}
    </div>
  );
};

export default App;

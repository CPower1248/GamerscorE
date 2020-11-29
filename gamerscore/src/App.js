import React, { useState } from "react"
import './App.css';
import Console from "./components/Console"

const initialScores = [
  {
    name: "Playstation",
    score: 255
  },
  {
    name: "Xbox",
    score: 27
  },
  {
    name: "Nintendo",
    score: 64
  },
  {
    name: "Steam",
    score: 377
  }
];
const initialGE = 181;

function App() {
  const [ scores, setScores ] = useState(initialScores)
  const [ ge, setGE ] = useState(initialGE)

  return (
    <div className="App">
      <h1>GamerscorE</h1>
      <div className="scores-container">
        <div className="console-container">
          {scores.map(item => {
            return <Console console={item} />
          })}
        </div>
        <div className="ge-container">
          <div className="console-ge">
            <h3>GE Score</h3>
            <div className="console-score-ge">
              <span>{ge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

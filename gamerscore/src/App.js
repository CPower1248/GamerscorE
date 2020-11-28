import './App.css';

function App() {
  return (
    <div className="App">
      <h1>GamerscorE</h1>
      <div className="scores-container">
        <div className="console-container">
          <div className="console-playstation">
            <h3>Playstation</h3>
            <div className="console-score-playstation">
              <span>276</span>
            </div>
          </div>
          <div className="console-xbox">
            <h3>X-Box</h3>
            <div className="console-score-xbox">
              <span>78</span>
            </div>
          </div>
          <div className="console-nintendo">
            <h3>Nintendo</h3>
            <div className="console-score-nintendo">
              <span>24</span>
            </div>
          </div>
          <div className="console-steam">
            <h3>Steam</h3>
            <div className="console-score-steam">
              <span>377</span>
            </div>
          </div>
        </div>
        <div className="ge-container">
          <div className="console-ge">
            <h3>GE Score</h3>
            <div className="console-score-ge">
              <span>189</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

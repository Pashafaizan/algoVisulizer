import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import BubbleSort from "./components/BubbleSort/BubbleSort";
import Header from "./components/Header/Header";
import InsertionSort from "./components/InsertionSort/InsertionSort";
import Selectionsort from "./components/SelectionSort/Selectionsort";
function App() {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Header
              play={() => {
                setIsPlay(true);
              }}
            />
            <BubbleSort playState={isPlay} />
          </Route>
          <Route exact path="/insertion">
            <Header  play={() => {
              setIsPlay(true);
              }}/>
            <InsertionSort playState={isPlay}  />
          </Route>
          <Route exact path="/selection">
          <Header  play={() => {
             setIsPlay(true);
              }}/>
            <Selectionsort playState={isPlay} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

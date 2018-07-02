import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './components/Game'
import Score from './components/Scores'
import Environment from './components/Environment'
import './App.css';

class App extends React.Component {
  componentDidMount() {
    setInterval(this.randomBox, 1000)
  }

  state = {
    gameState: "pre",
    boxes: Array.from(Array(400), (value, index) => {
      return {active:false}
    }),
    highlightedBox: null,
    score: 0,
    level: 0,
    misclick: 0,
    scoreBoardData: [],
  }

  randomBox = () => {
    const randomNumber =  Math.floor(Math.random() * 400)
    console.log(randomNumber)
    const highlightedBox = this.state.highlightedBox
    console.log("highlighted Box", highlightedBox);
    this.setState((prevState) => {
      return {
        boxes: prevState.boxes.map((current, index) => {
          if(index === highlightedBox) {
            return {active: false}
          }
          else if(index === randomNumber){
            return {active: true}
          }
          else {
            return current
          }
          }),
          highlightedBox: randomNumber

        }
      })
    }
  

    


  

  render() {
    return (
      <div className="App">
        <div className="environment">
          <Environment score={this.state.score} level={this.state.level} misclick={this.state.misclick} />
        </div>
        <div className="game">
          <Game boxes={this.state.boxes} gameState={this.state.gameState}/>
        </div>
        <div className="score">
          <Score scoreBoardData={this.state.scoreBoardData} />
        </div>
      </div>
    );
  }
}

export default App;

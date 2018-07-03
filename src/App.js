import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './components/Game'
import Score from './components/Scores'
import Environment from './components/Environment'
import './App.css';

class App extends React.Component {
  

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
    clicked: false
  }

  randomBox = () => {
    const randomNumber =  Math.floor(Math.random() * 400)
    const highlightedBox = this.state.highlightedBox
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

    clickBox = (boxActive) => {
      if(boxActive === true && this.state.clicked === false) {
        this.setState((prevState) => {
          return {
            score: prevState.score +1,
            clicked: true
          }
        }) 
    }
    if(this.state.score % 10 === 0) {
      this.setState((prevState) =>{
        return {
          level: this.state.score === prevState.score ? prevState.level : prevState.level +1
        }
      })
    }
    if(boxActive === false && this.state.clicked === false) {
      this.setState((prevState) => {
        return {
          misclick: prevState.misclick +1,
          clicked: true
        }
      }) 
    }
    if(this.state.misclick === 9) {
      this.setState(() => {
        return {
          gameState: 'post'
        }
      })
    }
  }

    timer = async () => {
      const reset = () =>{
        this.setState(() => {
          return {
            clicked: false
          }
        })
      }
      let interval = 1500 - 250 * this.state.level 
      setTimeout(this.randomBox, interval)
      setTimeout(reset, interval)
      setTimeout(this.timer, interval) 
    }

    componentDidMount() {
      this.timer()
    }

    startGame = () => {
      this.setState(() => {
        return {
          gameState: "game"
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
          <Game boxes={this.state.boxes} gameState={this.state.gameState} clickBox={this.clickBox} startGame={this.startGame} score={this.state.score}/>
        </div>
        <div className="score">
          <Score scoreBoardData={this.state.scoreBoardData} />
        </div>
      </div>
    );
  }
}

export default App;

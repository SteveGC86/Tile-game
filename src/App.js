import React from 'react';
import Game from './components/Game'
import ScoreBoard from './components/ScoreBoard'
import Environment from './components/Environment'
import axios from 'axios'
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

    async componentDidMount() {
     const URL = "http://localhost:3000/api/scores"
      let resultJSON = await fetch(URL)
      let result = await resultJSON.json()
      this.setState(() =>{
        return {
          scoreBoardData: result
        }
      })

      this.timer()
    }


    startGame = () => {
      this.setState(() => {
        return {
          gameState: "game"
        }
      })
    }

     submitScore =async(name) => {
      axios.post('http://localhost:3000/api/scores', {
        name: name,
        score: this.state.score
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
    }

    
  

  render() {
    return (
      <div className="App">
        <div className="environment">
          <Environment score={this.state.score} level={this.state.level} misclick={this.state.misclick} />
        </div>
        <div className="game">
          <Game boxes={this.state.boxes} gameState={this.state.gameState} clickBox={this.clickBox} startGame={this.startGame} score={this.state.score} submitScore={this.submitScore}/>
        </div>
        <div className="score">
          <ScoreBoard scoreBoardData={this.state.scoreBoardData} />
        </div>
      </div>
    );
  }
}

export default App;

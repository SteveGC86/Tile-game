import React from 'react'
import Box from './Box'

class Game extends React.Component {
  myInput = React.createRef();
  
  submitScore = () => {
    const name = this.myInput.current.value
    console.log(name)
    this.props.submitScore(name)
  }

  render() {
    return ( 
      <div className="game">
        {this.props.gameState === "pre" && <button className="start" onClick={this.props.startGame}>Start</button>}
        {this.props.gameState === "game" && this.props.boxes.map((box,index) => {
            return <Box key={index} active={box.active} clickBox={this.props.clickBox}/>
          })}
        {this.props.gameState === "post" && (
          <div className="submission"> 
          <button   
            className="submit"
              onClick={this.submitScore}
              >Submit</button>
          <input ref={this.myInput} type="text" placeholder="Name?"></input>
          <h3>Your Score Is {this.props.score}</h3>
          </div>
        )}
          {this.props.gameState === "feedback" && <h2>Your score has been submitted</h2>}
    </div>
    );
  }
}


export default Game;


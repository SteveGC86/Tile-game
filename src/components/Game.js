import React from 'react'
import Box from './Box'

class Game extends React.Component {
 
  render() {
    return ( 
      <div className="game">
        {this.props.gameState === "pre" && <button className="start" onClick={this.props.startGame}>Start</button>}
        {this.props.gameState === "game" && this.props.boxes.map((box,index) => {
            return <Box key={index} active={box.active} clickBox={this.props.clickBox}/>
          })}
        {this.props.gameState === "post" && (
          <div> 
          <button className="submit">Submit</button>
          <input type="text" placeholder="Name?"></input>
          <h4>Your Score Is {this.props.score}</h4>
          </div>
        )}
    </div>
    );
  }
}


export default Game;
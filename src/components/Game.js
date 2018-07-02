import React from 'react'
import Box from './Box'

class Game extends React.Component {
 
  render() {
    return ( 
      <div className="game">

          {this.props.boxes.map(box => {
            return <Box active={box.active} />
          })}

        <button className="start">Start</button>
        <button className="submit">Submit</button>
      </div>
    );
}
}


export default Game;
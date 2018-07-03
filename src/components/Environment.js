import React from 'react'

class Environment extends React.Component {
  render() {
    return (
      <div className="board">
        <h3>Environment</h3>
        <h3 className="score">Score: {this.props.score}</h3>  
        <h3 className="level">Level: {this.props.level}</h3>
        <h3 className="misclick">Misclick: {this.props.misclick}</h3>

      </div>
    )
  }
}

export default Environment
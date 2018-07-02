import React from 'react'

class Environment extends React.Component {
  render() {
    return (
      <div className="board">
        <h3>Environment</h3>
        <h3 className="score">Score </h3>  
        <h3 className="level">Level</h3>
        <h3 className="misclick">Misclick</h3>

      </div>
    )
  }
}

export default Environment
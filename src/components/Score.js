import React from 'react'

class Score extends React.Component {
  render() {
    return (
      <div>
        <h3>Name: {this.props.data.name}</h3>
        <span/>
        <h3>Score: {this.props.data.score}</h3>
      </div>
    ) 
  }
}

export default Score
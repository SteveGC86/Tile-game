import React from 'react'
import Score from './Score'

class ScoreBoard extends React.Component {
  render() {
    return (
      <div>
      
        {this.props.scoreBoardData.map((data)=> {
          return <Score data={data} />
        }) }
      
      </div>
    ) 
  }
}

export default ScoreBoard
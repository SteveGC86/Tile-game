import React from 'react'

class Box extends React.Component {
  render() {
    return ( 
      <div className="box">
        {this.props.active? "a" : "i" }
      </div>
    );
}
}


export default Box;
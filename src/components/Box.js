import React from 'react'

class Box extends React.Component {
  clickBox = () => {
    this.props.clickBox(this.props.active)
  }
  render() {
    return ( 
      <div className="box"  onClick={this.clickBox}>
        {this.props.active? <div className="active"></div> : <div className="non-Active"></div> }
      </div>
    );
}
}


export default Box;
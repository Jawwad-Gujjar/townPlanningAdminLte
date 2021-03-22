import React, { Component } from 'react';



class Brokerdropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {//console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.broker_Name}
        </option>
        
     
    );
  }
}


export default Brokerdropdown ;
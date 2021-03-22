import React, { Component } from 'react';
class Receivedropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.customer_Name}
        </option>
        
     
    );
  }
}


export default Receivedropdown ;
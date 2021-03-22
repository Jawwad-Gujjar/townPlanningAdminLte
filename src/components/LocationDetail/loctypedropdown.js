import React, { Component } from 'react';



class Typedropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.type_Name}
        </option>
        
     
    );
  }
}


export default Typedropdown ;
import React, { Component } from 'react';
class Loctypedropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {//console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.type_Name}
        </option>
        
     
    );
  }
}


export default Loctypedropdown ;
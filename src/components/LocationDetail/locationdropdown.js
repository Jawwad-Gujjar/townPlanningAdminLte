import React, { Component } from 'react';



class Locationdropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.location_Name}
        </option>
        
     
    );
  }
}


export default Locationdropdown ;
import React, { Component } from 'react';
class Areadropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {//console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.area_Name}
        </option>
        
     
    );
  }
}


export default Areadropdown ;
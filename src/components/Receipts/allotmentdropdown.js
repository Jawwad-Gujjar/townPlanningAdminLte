import React, { Component } from 'react';
class Allotmentdropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.allotment_No}
        </option>
        
     
    );
  }
}


export default Allotmentdropdown ;
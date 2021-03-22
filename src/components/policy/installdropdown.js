import React, { Component } from 'react';
class Installmentropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.installment_Name}
        </option>
        
     
    );
  }
}


export default Installmentropdown ;
import React, { Component } from 'react';
class Paymentropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.payment_Name}
        </option>
        
     
    );
  }
}


export default Paymentropdown ;
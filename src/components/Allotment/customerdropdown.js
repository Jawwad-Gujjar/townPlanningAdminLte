import React, { Component } from 'react';



class Customerdropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {//console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.customer_Name}
        </option>
        
     
    );
  }
}


export default Customerdropdown ;
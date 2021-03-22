import React, { Component } from 'react';
class Plandropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {//console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.plan_title}

        </option>
        
     
    );
  }
}


export default Plandropdown ;
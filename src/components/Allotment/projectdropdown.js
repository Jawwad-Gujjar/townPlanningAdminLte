import React, { Component } from 'react';
class Projectdropdown extends Component {

  constructor(props) {
        super(props)
    }

  render() {//console.log(this.props)
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.project_Name}
        </option>
        
     
    );
  }
}


export default Projectdropdown ;
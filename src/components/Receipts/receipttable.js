import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);      
    }

  render() {
      console.log(this.props)
    return (
        <tr>
          <td>
            {this.props.obj.installmentDate}
          </td>
          <td>  
            {this.props.obj.Amount}
          </td>
        </tr>
    );
  }
}

export default TableRow;
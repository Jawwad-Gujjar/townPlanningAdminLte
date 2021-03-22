import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InstallmentRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4010/installment/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.installment_Id}
          </td>
          <td>
            {this.props.obj.installment_Name}
          </td>
       <td>
         {this.props.obj.installmentAfter}
       </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default InstallmentRow;
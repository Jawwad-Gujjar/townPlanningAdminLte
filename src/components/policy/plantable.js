import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PlanRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4010/policy/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.plan_title}
          </td>
          <td>
            {this.props.obj.booking}
          </td>
          <td>
            {this.props.obj.installment_P}
          </td>
          <td>
            {this.props.obj.no_Installment}
          </td>
          <td>
            {this.props.obj.installmentname}
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

export default PlanRow;
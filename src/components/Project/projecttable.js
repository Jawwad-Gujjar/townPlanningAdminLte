import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const apihit = require('../../routecontroller')

class ProjectRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get(apihit.APIHIT+'/project/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.project_Name}
          </td>
          <td>
            {this.props.obj.project_Type}
          </td>
          <td>
            {this.props.obj.assign_To}
          </td>
          <td>
            {this.props.obj.start_Date}
          </td>
          <td>
            {this.props.obj.end_Date}
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

export default ProjectRow;
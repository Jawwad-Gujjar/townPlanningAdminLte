import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

class Drodownitem extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4010/contacts/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
     
        <option value={this.props.obj._id}>
          {this.props.obj.project_Name}
        </option>
        
        // <tr>
        //   <td>
        //     {this.props.obj.type_Id}
        //   </td>
        //   <td>
        //     {this.props.obj.type_Name}
        //   </td>
       
        //   <td>
        //     <Link to={"/edittype/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        //   </td>
        //   <td>
        //     <button onClick={this.delete} className="btn btn-danger">Delete</button>
        //   </td>
        // </tr>
    );
  }
}


export default Drodownitem ;
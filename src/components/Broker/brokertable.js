import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BrokerRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4010/customer/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.broker_Id}
          </td>
          <td>
            {this.props.obj.activation_Date}
          </td>
          <td>
            {this.props.obj.broker_Name}
          </td>
          <td>
              {this.props.obj.cnIc}
          </td>  
          <td>
              {this.props.obj.address}
          </td>
          <td>
              {this.props.obj.city}
          </td>  
          <td>
              {this.props.obj.country}
          </td> 
          <td>
              {this.props.obj.teleNo}
          </td>  
          <td>
              {this.props.obj.cellNo}
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

export default BrokerRow;
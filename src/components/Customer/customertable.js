import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CoustomerRow extends Component {

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
            {this.props.obj.customer_Id}
          </td>
          <td>
            {this.props.obj.membership_Date}
          </td>
          <td>
            {this.props.obj.customer_Name}
          </td>
          <td>
              {this.props.obj.Cnic}
          </td>
          <td>
              {this.props.obj.present_Address}
          </td>
          <td>
              {this.props.obj.City}
          </td>  
          <td>
              {this.props.obj.Country}
          </td>  
          <td>
              {this.props.obj.parmanent_Address}
          </td>
          <td>
              {this.props.obj.pCity}
          </td>  
          <td>
              {this.props.obj.pCountry}
          </td> 
          <td>
              {this.props.obj.tele_No}
          </td>  
          <td>
              {this.props.obj.cell_No}
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

export default CoustomerRow;
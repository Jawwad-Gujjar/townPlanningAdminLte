import React, { Component } from 'react';
import axios from 'axios';
import TypeRow from './typetable'
const apihit = require('../../routecontroller')
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangetypeId= this.onChangetypeId.bind(this);
    this.onChangetypeName = this.onChangetypeName.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
     type_Id: '',
     type_Name: '',
     business: [],
    }
  }
  onChangetypeId(e) {
    this.setState({
        type_Id: e.target.value
    });
  }
  onChangetypeName(e) {
    this.setState({
        type_Name: e.target.value
    })  
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      type_Id: this.state.type_Id,
      type_Name: this.state.type_Name,
    };
    console.log(obj)
    console.log('Add contact hit ho raha ha')
    axios.post(apihit.APIHIT+'/contacts/addcont', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      type_Id: '',
      type_Name: ''
    })
  }
  componentDidMount(){
    axios.get(apihit.APIHIT+'/contacts')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow(){
    return this.state.business.map(function(object, i){
        return <TypeRow obj={object} key={i} />;
    });
  }
  
  render() {
    return (
        <div style={{ marginTop: 10,marginLeft:10 }}>
          <div className="content-wrapper">
            <form onSubmit={this.onSubmit}>
              <div className="row">
              <div class="col-sm-6">
                <div className="form-group">
                    <label>Type Id:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.type_Id}
                      onChange={this.onChangetypeId}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Type Name: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.type_Name}
                      onChange={this.onChangetypeName}
                      />
                </div>
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </form>
            <h3 align="center">Location Type List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Location Type Id</th>
                <th>Location Type Name</th>
                
                <th colSpan="2" > Action</th>
              </tr>
            </thead>
            <tbody>
     { this.tabRow() }

            </tbody>
          </table>
          </div>
        </div>
    )
  }
}
import React, { Component } from 'react';
import axios from 'axios';
import AreaRow from './areatable'
const apihit = require('../../routecontroller')
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeareaId= this.onChangeareaId.bind(this);
    this.onChangeareaName = this.onChangeareaName.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
     area_Id: '',
     area_Name: '',
     business: []
    }
  }
  onChangeareaId(e) {
    this.setState({
      area_Id: e.target.value
    });
  }
  onChangeareaName(e) {
    this.setState({
      area_Name: e.target.value
    })  
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      area_Id: this.state.area_Id,
      area_Name: this.state.area_Name,
    };
    console.log(obj)
    axios.post(apihit.APIHIT +'/area/addarea', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      area_Id: '',
      area_Name: ''
    })
  }
  componentDidMount(){
  
    axios.get(apihit.APIHIT +'/area')
    //axios.get(REACT_APP_API_URL)
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow(){
    console.log(this.state.business)
    return this.state.business.map(function(object, i){
        return <AreaRow obj={object} key={i} />;
    });
  }

 
  render() {
    return (
        <div style={{ marginTop: 10,marginLeft:10 }}>
           <div className="content-wrapper">
            <form >
              <div className="row">
              <div class="col-sm-6">
                <div className="form-group">
                    <label>Area Id:  </label>
                    <input 
                    style={{width:300 }}
                      type="text" 
                      className="form-control" 
                      value={this.state.area_Id}
                      onChange={this.onChangeareaId}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Area Size: </label>
                    <input 
                    style={{width:300}}
                    type="text" 
                      className="form-control"
                      value={this.state.area_Name}
                      onChange={this.onChangeareaName}
                      />
                </div>
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
                
            </form>
            <h3 align="center">Area List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Area Id</th>
                <th> Area Size</th>
                
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
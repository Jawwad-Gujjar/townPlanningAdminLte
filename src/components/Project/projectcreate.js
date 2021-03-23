import React, { Component } from 'react';
import axios from 'axios';
import ProjectRow from './projecttable'
const apihit = require('../../routecontroller')

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeprojectname= this.onChangeprojectname.bind(this);
    this.onChangeprojecttype = this.onChangeprojecttype.bind(this);
    this.onChangeassignto = this.onChangeassignto.bind(this);
    this.onChangestartdate = this.onChangestartdate.bind(this);
    this.onChangeenddate = this.onChangeenddate.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        project_Name: '',
        project_Type:'',
        assign_To:'',
        start_Date:'',
        end_Date : '',
         business: [],
         details:''
    }
  }
  onChangeprojectname(e) {
    this.setState({
        project_Name: e.target.value
    });
  }
  onChangeprojecttype(e){
      this.setState({
          project_Type: e.target.value
      })
  }
  onChangeassignto(e){
      this.setState ({
        assign_To : e.target.value
      })
  }
  onChangestartdate(e){
      this.setState({
          start_Date : e.target.value
      })
  }
  onChangeenddate (e){
      this.setState ({
          end_Date : e.target.value 
      })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
        project_Name: this.state.project_Name,
        project_Type : this.state.project_Type,
        assign_To : this.state.assign_To,
        start_Date : this.state.start_Date,
        end_Date : this.state.end_Date,
        details : {initkey:"Init Value"}
    };
    console.log(obj)
    axios.post(apihit.APIHIT+'/project/addproject', obj)
        .then(res => console.log(res.data));
    
    this.setState({
        project_Name: '',
        project_Type : '',
        assign_To :'',
        start_Date : '',
        end_Date :'',
        details:''
    })
  }
  componentDidMount(){
    axios.get(apihit.APIHIT+'/project')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow(){
    return this.state.business.map(function(object, i){
        return <ProjectRow obj={object} key={i} />;
    });
  } 
  render() {
    return (
        <div style={{ marginTop: 10,marginLeft:10 }}>
          <h1 style={{textAlign:'center'}} >Create Project</h1>
          <div className="content-wrapper">
            <form onSubmit={this.onSubmit}>
              <div className="row">
              <div class="col-sm-6">
                <div className="form-group">
                   <label>Project Name:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.project_Name}
                      onChange={this.onChangeprojectname}
                      />
                      </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                   <label>Project Type:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.project_Type}
                      onChange={this.onChangeprojecttype}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                   <label>Assigned To:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.assign_To}
                      onChange={this.onChangeassignto}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                   <label>Start Date :  </label>
                    <input 
                      type="date" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.start_Date}
                      onChange={this.onChangestartdate}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                   <label>End Date :  </label>
                    <input 
                      type="date" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.end_Date}
                      onChange={this.onChangeenddate}
                      />
                </div>
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" value=" Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </form>
            `   <h3 align="center">Project List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Project Type</th>
                <th>Assigned To</th>
                <th>Start Date</th>
                <th>End Date</th>
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

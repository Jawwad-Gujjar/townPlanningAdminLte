import React, { Component } from 'react';
import axios from 'axios';
import dropdewnitem from './dropdown';
const apihit = require('../../routecontroller')

export default class Locationdetail extends Component {
  constructor(props) {
    super(props);
    this.onChangelocationId= this.onChangelocationId.bind(this);
    this.onChangelocationName = this.onChangelocationName.bind(this);
    this.state = {business: [],location:[],projects:[]};

    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
     location_Id: '',
     location_Name: '',
     location:[],
     business: [],
     projects:[],
    }
  }
  onChangelocationId(e) {
    this.setState({
      location_Id: e.target.value
    });
  }
  onChangelocationName(e) {
    this.setState({
    location_Name: e.target.value
    })  
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      location_Id: this.state.location_Id,
      location_Name: this.state.location_Name,
    };
    console.log(obj)
    axios.post(apihit.APIHIT+'/Business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      location_Id: '',
      location_Name: ''
    })
  }  componentDidMount(){
    axios.get(apihit.APIHIT+'/business')
      .then(response => {
        this.setState({ business: response.data });       
      })
      .catch(function (error) {
        // this.setState({ business: response.data });
               console.log(error);
      })

      axios.get(apihit.APIHIT+'/project')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
 
  }
  ddlproject(){
    return this.state.projects.map(function(object, i){
        return <dropdewnitem obj={object} key={i} />;
    });
  }
 
  
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div>
                    <select>
                        {this.ddlproject()}
                    </select>
                </div>
                <div className="form-group">
                    <label>Location Id:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.location_Id}
                      onChange={this.onChangelocationId}
                      />
                </div>
                <div className="form-group">
                    <label>Location Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.location_Name}
                       onChange={this.onChangelocationName}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value=" Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </form>
         `   <h3 align="center">Location List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Location Id</th>
                <th>Location Name</th>
                
                <th colSpan="2" > Action</th>
              </tr>
            </thead>
            {/* <tbody>
     
     { this.tabRow() }

            </tbody> */}
          </table>`

        </div>


    )
  }
}

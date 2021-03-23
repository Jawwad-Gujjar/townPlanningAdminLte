import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangelocationId= this.onChangelocationId.bind(this);
    this.onChangelocationName = this.onChangelocationName.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
     location_Id: '',
     location_Name: '',
     business: [],
    }
  }
  componentDidMount() {
      axios.get('http://localhost:4010/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                location_Id: response.data.location_Id, 
                location_Name: response.data.location_Name,
           });
          })
          .catch(function (error) {
              console.log(error);
          })
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
    axios.post('http://localhost:4010/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/location');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10,marginLeft:10 }}>
            <h3 align="center">Update Location</h3>
            <div className="content-wrapper">
            <form onSubmit={this.onSubmit}>
            <div className="row">
              <div class="col-sm-6">
                <div className="form-group">
                    <label>Location Id:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.location_Id}
                      onChange={this.onChangelocationId}
                      />
                </div>
                </div>
                
              <div class="col-sm-6">
                <div className="form-group">
                    <label>Location Name: </label>
                    <input type="text" 
                      style={{width: 300}}
                      className="form-control"
                      value={this.state.location_Name}
                      onChange={this.onChangelocationName}
                      />
                </div>
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update location" 
                      className="btn btn-primary"/>
                </div>
            </form>
            </div>
        </div>
    )
  }
}
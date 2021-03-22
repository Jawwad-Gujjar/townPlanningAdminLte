import React, { Component } from 'react';
import axios from 'axios';

export default class Edittype extends Component {
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
  componentDidMount() {
      axios.get('http://localhost:4010/contacts/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                type_Id: response.data.type_Id, 
                type_Name: response.data.type_Name,
           });
          })
          .catch(function (error) {
              console.log(error);
          })
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
    axios.post('http://localhost:4010/contacts/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/locationtype');
  }
 
  render() {
      console.log('Reach at edit.type')
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Location Type</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Type Id:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.type_Id}
                      onChange={this.onChangetypeId}
                      />
                </div>
                <div className="form-group">
                    <label>Type Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.type_Name}
                      onChange={this.onChangetypeName}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
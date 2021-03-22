import React, { Component } from 'react';
import axios from 'axios';
import InstallmentRow from './installmenttable'
const apihit = require('../../routecontroller')

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeinstallmentid= this.onChangeinstallmentid.bind(this);
    this.onChangeinstallmentname = this.onChangeinstallmentname.bind(this);
    this.onChangeinstallmentntAfter = this.onChangeinstallmentntAfter.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        installment_Id: '',
     installment_Name: '',
     installmentAfter : '',
     business: [],
    }
  }
  onChangeinstallmentid(e) {
    this.setState({
        installment_Id: e.target.value
    });
  }
  onChangeinstallmentname(e) {
    this.setState({
    installment_Name: e.target.value
    })  
  }
  onChangeinstallmentntAfter(e){
    this.setState({
      installmentAfter : e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
        installment_Id: this.state.installment_Id,
        installment_Name: this.state.installment_Name,
        installmentAfter :this.state.installmentAfter,
    };
    console.log(obj)
    axios.post(apihit.APIHIT+'/installment/addins', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      installment_Id: '',
      installment_Name: '',
      installmentAfter :'',
    })
  }
  componentDidMount(){
    axios.get(apihit.APIHIT+'/installment')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow(){
    return this.state.business.map(function(object, i){
        return <InstallmentRow obj={object} key={i} />;
    });
  }
  
 
  render() { 
    return (
        <div style={{ marginTop: 10 }}>
            <div className="main">
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label>Installment Id:  </label>
                    <input 
                      type="text"
                      style={{width: 300}} 
                      className="form-control" 
                      value={this.state.installment_Id}
                      onChange={this.onChangeinstallmentid}
                      />
                </div>
                <div className="form-group">
                    <label>Installment Name:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.installment_Name}
                      onChange={this.onChangeinstallmentname}
                      />
                </div>
                <div className="form-group">
                    <label>Installment Reoccur After:  </label>
                    <input 
                      type="number" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.installmentAfter}
                      onChange={this.onChangeinstallmentntAfter}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value=" Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </form>
            `   <h3 align="center">Installment List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Installment Id</th>
                <th>Installment Name</th>
                <th>Installment After Month</th>
                <th colSpan="2" > Action</th>
              </tr>
            </thead>
            <tbody>
     { this.tabRow() }

            </tbody>
          </table>`
            </div>
   

        </div>


    )
  }
}

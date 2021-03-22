import React, { Component } from 'react';
import axios from 'axios';
import PaymentRow from './paymenttable'
const apihit = require('../../routecontroller')




export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangepaymentId= this.onChangepaymentId.bind(this);
    this.onChangepaymentName = this.onChangepaymentName.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
     payment_Id: '',
     payment_Name: '',
     business: [],
    }
  }
  onChangepaymentId(e) {
    this.setState({
      payment_Id: e.target.value
    });
  }
  onChangepaymentName(e) {
    this.setState({
    payment_Name: e.target.value
    })  
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      payment_Id: this.state.payment_Id,
      payment_Name: this.state.payment_Name,
    };
    console.log(obj)
    axios.post(apihit.APIHIT+'/payment/addpay', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      payment_Id: '',
      payment_Name: ''
    })
  }
  componentDidMount(){
    console.log('reach')
    axios.get(apihit.APIHIT+'/payment')
      .then(response => {
        this.setState({ business: response.data });
 
      })
      .catch(function (error) {
        // this.setState({ business: response.data });
               console.log(error);
      })
  }
  tabRow(){
    return this.state.business.map(function(object, i){
        return <PaymentRow obj={object} key={i} />;
    });
  }
 
  
  render() {
    //componentDidMount()
    return (
        <div style={{ marginTop: 10 }}>
           <div className="main">
            <form>
              
                <div className="form-group">
                    <label>Payment Id:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.payment_Id}
                      onChange={this.onChangepaymentId}
                      /> 
                </div>
                <div className="form-group">
                    <label>Payment Mode: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.payment_Name}
                       onChange={this.onChangepaymentName}
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
                <th>Payment Id</th>
                <th>Payment Mode</th>
                
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

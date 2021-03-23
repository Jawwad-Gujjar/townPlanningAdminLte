import React, { Component } from 'react';
import axios from 'axios';
import CoustomerRow from './customertable'
//import TableRow from './locationtable';
const apihit = require('../../routecontroller')

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangecustomerId= this.onChangecustomerId.bind(this);
    this.onChangemembershipDate = this.onChangemembershipDate.bind(this);
    this.onChangecustomerName = this.onChangecustomerName.bind(this);
    this.onChangeCnic = this.onChangeCnic.bind(this);
    this.onChangeprasentAddress = this.onChangeprasentAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCountry=this.onChangeCountry.bind(this);
    this.onChangeparmanentAddress=this.onChangeparmanentAddress.bind(this);
    this.onChangepCity=this.onChangepCity.bind(this);
    this.onChangepCountry=this.onChangepCountry.bind(this);
    this.onChangeteleNo = this.onChangeteleNo.bind(this);
    this.onChangecellNo = this.onChangecellNo.bind(this);
        this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
     customer_Id: '',
     membership_Date: '',
     customer_Name : '',
     Cnic : '',
     present_Address: '',
     City : '',
     Country:'',
     parmanent_Address : '',
     pCity : '',
     pCountry : '',
     tele_No : '',
     cell_No :'',
     business: [],
    }
  }
  onChangecustomerId(e) {
    this.setState({
      customer_Id: e.target.value
    });
  }
  onChangemembershipDate(e) {
    this.setState({
    membership_Date: e.target.value
    })  
  }
  onChangecustomerName(e){
    this.setState({
      customer_Name : e.target.value
    })
  }
  onChangeCnic(e){
    this.setState({
       Cnic : e.target.value
    })
  }
  onChangeprasentAddress(e){
    this.setState({
      present_Address: e.target.value
    })
  }
  onChangeCity(e){
    this.setState({
      City : e.target.value
    })
  }
  onChangeCountry(e){
    this.setState({
      Country : e.target.value
    })
  }
  onChangeparmanentAddress(e){
    this.setState({
      parmanent_Address: e.target.value
    })
  }
  onChangepCity(e){
    this.setState({
     pCity : e.target.value
    })
  }
  onChangepCountry(e){
    this.setState({
      pCountry : e.target.value
    })
  }
  onChangeteleNo(e){
    this.setState ({
      tele_No :  e.target.value
    })
  }
  onChangecellNo (e){
    this.setState ({
      cell_No :e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      customer_Id : this.state.customer_Id,
      membership_Date: this.state.membership_Date,
      customer_Name : this.state.customer_Name,
      Cnic : this.state.Cnic,
      present_Address : this.state.present_Address,
      City: this.state.City,
      Country : this.state.Country,
      parmanent_Address : this.state.parmanent_Address,
      pCity : this.state.pCity,
      pCountry : this.state.pCountry,
      tele_No : this.state.tele_No,
      cell_No : this.state.cell_No,
        };
    console.log(obj)
    axios.post(apihit.APIHIT+'/customer/addcus', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      customer_Id: '',
      membership_Date: '',
      customer_Name :'',
      Cnic : '',
      present_Address: '',
      City : '',
      Country :'',
      parmanent_Address : '',
      pCity :'',
      pCountry : '',
      tele_No : '',
      cell_No : '', 
    })
  }
  componentDidMount(){
    console.log('reach')
    axios.get(apihit.APIHIT+'/customer')
      .then(response => {
        this.setState({ business: response.data });
 
      })
      .catch(function (error) {
               console.log(error);
      })
      
  }
  tabRow(){
    return this.state.business.map(function(object, i){
        return <CoustomerRow obj={object} key={i} />;
    });
  }
 render() {
       return (
        <div style={{ marginTop: 10,marginLeft : 10 }}>
            <div className="content-wrapper">
            <form >
              <div className="row">
              <div class="col-sm-6">
                <div className="form-group">
                    <label>Customer Id:  </label>
                    <input style={{width:300}}
                      type="text" 
                      className="form-control" 
                      value={this.state.customer_Id}
                      onChange={this.onChangecustomerId}
                      /> 
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Membership Date: </label>
                    <input style={{width:300}} 
                    type="date" 
                      className="form-control"
                      value={this.state.membership_Date}
                       onChange={this.onChangemembershipDate}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Customer Name: </label>
                    <input  
                    type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.customer_Name}
                       onChange={this.onChangecustomerName}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>C.N.I.C #: </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.Cnic}
                       onChange={this.onChangeCnic}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Present Address: </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.present_Address}
                       onChange={this.onChangeprasentAddress}
                      />
             </div>
             </div>
             <div class="col-sm-6">
             <div className="form-group">
                    <label>City: </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.City}
                       onChange={this.onChangeCity}
                      />
             </div>
             </div>
             <div class="col-sm-6">
             <div className="form-group">
                    <label>Country: </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.Country}
                       onChange={this.onChangeCountry}
                      />
             </div>
             </div>              
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Permanent Address: </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.parmanent_Address}
                       onChange={this.onChangeparmanentAddress}
                      />
             </div>
             </div>
             <div class="col-sm-6">
             <div className="form-group">
                    <label>City: </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.pCity}
                       onChange={this.onChangepCity}
                      />
             </div>
             </div>
             <div class="col-sm-6">             
             <div className="form-group">
                    <label>Country: </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.pCountry}
                       onChange={this.onChangepCountry}
                      />
             </div>
            </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Telephone Number (s): </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.tele_No}
                       onChange={this.onChangeteleNo}
                      />
             </div>
             </div>
             <div class="col-sm-6">
             <div className="form-group">
                    <label>Cell Number : </label>
                    <input  style={{width: 300}}
                    type="text" 
                      className="form-control"
                      value={this.state.cell_No}
                       onChange={this.onChangecellNo}
                      />
             </div>
             </div>
             </div>

                <div className="form-group">
                    <input type="submit" value=" Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </form>
         `   <h3 align="center">Customer List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Membership Date</th>
                <th>Customer Name</th>
                <th>C.N.I.C</th>
                <th>Present Address</th>
                <th>Present City</th>
                <th>Present Country</th>
                <th>Parmanent Address</th>
                <th>Parmanent City</th>
                <th>Parmanent Country</th>
                <th>Telephone No</th>
                <th>Cell No</th>
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

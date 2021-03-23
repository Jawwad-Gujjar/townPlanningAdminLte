import React, { Component } from 'react';
import axios from 'axios';
import BrokerRow from './brokertable';
const apihit = require('../../routecontroller')

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangebrokerId= this.onChangebrokerId.bind(this);
    this.onChangeactivationDate = this.onChangeactivationDate.bind(this);
    this.onChangebrokerName = this.onChangebrokerName.bind(this);
    this.onChangecnIc = this.onChangecnIc.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangecity = this.onChangecity.bind(this);
    this.onChangecountry = this.onChangecountry.bind(this);
    this.onChangeteleNo = this.onChangeteleNo.bind(this);
    this.onChangecellNo =this.onChangecellNo.bind(this);
    this.onChangecammission = this.onChangecammission.bind(this);
    this.state = {business: []};
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
     broker_Id: '',
     activation_Date: '',
     broker_Name : '',
     cnIc : '',
     address : '',
     city : '',
     country : '',
     teleNo :'',
     cellNo :'',
     commission:'',
     business: [],
    }
  }
  onChangebrokerId(e) {
    this.setState({
      broker_Id: e.target.value
    });
  }
  onChangeactivationDate(e) {
    this.setState({
    activation_Date: e.target.value
    })  
  }
  onChangebrokerName(e){
      this.setState({
          broker_Name:e.target.value
      })
      console.log('broker name',this.state.broker_Name)
  }
  onChangecnIc(e){
      this.setState({
          cnIc : e.target.value
      })
  }
  onChangeaddress(e){
      this.setState({
          address : e.target.value
      })
  }
  onChangecity(e){
      this.setState({
          city : e.target.value
      })
  }
  onChangecountry(e){
      this.setState({
          country :e.target.value
              })
  }
  onChangeteleNo(e){
      this.setState({
          teleNo: e.target.value
      })
  }
  onChangecellNo(e){
      this.setState({
          cellNo: e.target.value
      })
  }
  onChangecammission(e){
    this.setState({
      commission: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    console.log()
    const obj = {
      broker_Id: this.state.broker_Id,
      activation_Date: this.state.activation_Date,
      broker_Name:this.state.broker_Name,
      cnIc : this.state.cnIc,
      address : this.state.address,
      city : this.state.city,
      country : this.state.country,
      teleNo : this.state.teleNo,
      cellNo : this.state.cellNo,
      commission : this.state.commission,
    };
    console.log(obj)
    axios.post(apihit.APIHIT+'/broker/addbro', obj)
       .then(res => console.log(res.data));
    
    this.setState({
      broker_Id: '',
      activation_Date: '',
      broker_Name : '',
      cnIc : '',
      address : '',
      city : '',
      country : '',
      teleNo : '',
      cellNo : '',
      commission : '',
    })
  }
  componentDidMount(){
    console.log('reach')
    axios.get(apihit.APIHIT+'/broker')
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
         return <BrokerRow obj={object} key={i} />;
     });
   }
 
  
  render() {
    //componentDidMount()
    return (
        <div style={{ marginTop: 10,marginLeft:10 }}>
          
          <div className="content-wrapper">
              <form>
              <div className="row">
              <div class="col-sm-6">
                <div className="form-group">
                    <label>Broker Id:  </label>
                    <input 
                    style={{width: 300}}
                      type="text" 
                      className="form-control" 
                      value={this.state.broker_Id}
                      onChange={this.onChangebrokerId}
                      /> 
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Activation Date: </label>
                    <input type="date" style={{width: 300}}
                      className="form-control"
                      value={this.state.activation_Date}
                       onChange={this.onChangeactivationDate}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Broker Name: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.broker_Name}
                       onChange={this.onChangebrokerName}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>C.N.I.C: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.cnIc}
                       onChange={this.onChangecnIc}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Address: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.address}
                       onChange={this.onChangeaddress}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>City: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.city}
                       onChange={this.onChangecity}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Country: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.country}
                       onChange={this.onChangecountry}
                      /> 
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Telephone No: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.teleNo}
                       onChange={this.onChangeteleNo}
                      /> 
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Cell No: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.cellNo}
                       onChange={this.onChangecellNo}
                      /> 
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Cammission (%):: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.cammission}
                       onChange={this.onChangecammission}
                      /> 
                </div>
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" value=" Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </form>
         `   <h3 align="center">Broker List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Broker Id</th>
                <th>Activation Date</th>
                <th>Broker Name</th>
                <th>C.N.I.C</th>
                <th>Address</th>
                <th>City</th>
                <th>Country</th>
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

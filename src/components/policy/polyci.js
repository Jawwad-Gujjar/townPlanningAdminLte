import React, { Component } from 'react';
import axios from 'axios';
import Installmentropdown from './installdropdown';
import PlanRow from './plantable'
const apihit = require('../../routecontroller')

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeplanTitle= this.onChangeplanTitle.bind(this);
    this.onChangebooking = this.onChangebooking.bind(this);
    this.onChangeinstallmentP = this.onChangeinstallmentP.bind(this);
    this.onChangenoInstallment = this.onChangenoInstallment.bind(this);
    this.state = {installment: [] , business:[]};
    this.selectedIndex = this.selectedIndex.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
     plan_title: '',
     booking: '',
     installment_P :'',
     installment: [],
     business : [],
     installmentname:'',
     installmentKey :'',
     installmentAfter :'',
    }
  }
  selectedIndex(e){
  var installmentName=""
  var ddl=document.getElementById("ddlinst")
  installmentName = ddl.options[ddl.selectedIndex].text
  var installmentKey=e.target.value
  console.log(installmentKey)
  this.setState({
      installmentname:installmentName,
      installmentKey :installmentKey
        
  })
  for(var i = 0 ;i < this.state.installment.length ; i++){
    console.log(installmentKey,this.state.installment[i]['_id'])
    if (installmentKey==this.state.installment[i]['_id']){
      this.setState({
 
        installmentAfter : this.state.installment[i]['installmentAfter']
      
      })
    }
  }
  console.log(this.state.installment)
}
  onChangeplanTitle(e) {
    this.setState({
      plan_title: e.target.value
    });
  }
  onChangebooking(e) {
    this.setState({
    booking: e.target.value
    })  
  }
  onChangeinstallmentP(e){
      this.setState({
          installment_P : e.target.value
      })
  }
  onChangenoInstallment(e){
      this.setState({
          no_Installment :e.target.value
      })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      plan_title: this.state.plan_title,
      booking: this.state.booking,
      installment_P : this.state.installment_P,
      no_Installment : this.state.no_Installment,
      installmentname: this.state.installmentname,
      installmentKey :this.state.installmentKey,
      installmentAfter : this.state.installmentAfter,
    };
    console.log(obj)
    axios.post(apihit.APIHIT+'/policy/addpol', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      plan_title: '',
      booking: '',
      installment_P : '',
      no_Installment: '',
    })
  }
  componentDidMount(){
    console.log('reach')
    axios.get(apihit.APIHIT+'/policy')
      .then(response => {
        this.setState({ business: response.data });
 
      })
      .catch(function (error) {
        // this.setState({ business: response.data });
               console.log(error);
      })
      axios.get(apihit.APIHIT+'/installment')
      .then(response => {
        this.setState({ installment: response.data });
       
    
        ///console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  ddlinstallment(){
    return this.state.installment.map(function(object, i){
        return <Installmentropdown obj={object} key={i} />;
    });
  }
  tabRow(){
    return this.state.business.map(function(object, i){
        return <PlanRow obj={object} key={i} />;
    });
  }  
  render() {
    //componentDidMount()
    return (
        <div  style={{ marginTop: 10,marginLeft:10 }}>
            <div className='content-wrapper'>
            <form>                        
              <div className="row">
              <div class="col-sm-6">
                <div className="form-group">
                    <label>Plan Title:  </label>
                    <input 
                      type="text" 
                      style={{width: 300}}
                      className="form-control" 
                      value={this.state.plan_title}
                      onChange={this.onChangeplanTitle}
                      /> 
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Booking (%): </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.booking}
                       onChange={this.onChangebooking}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label>Installment (%): </label>
                    <input type="text" 
                      className="form-control"
                      style={{width: 300}}
                      value={this.state.installment_P}
                       onChange={this.onChangeinstallmentP}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div className="form-group">
                    <label> No . Of Installment: </label>
                    <input type="text" 
                    style={{width: 300}}
                      className="form-control"
                      value={this.state.no_Installment}
                       onChange={this.onChangenoInstallment}
                      />
                </div>
                </div>
                <div class="col-sm-6">
                <div>
                    <label>Installment Period</label>
                    <br/>
                    <select id="ddlinst" style={{width:300}} onChange={this.selectedIndex}>
                      <option selected>---Please Select---</option>
                    {this.ddlinstallment()}
                    </select>
                    </div>
                    </div>
<br/>
</div>
                <div className="form-group">
                    <input type="submit" value=" Save" className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </form>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Plan Title</th>
                <th>Booking (%)</th>
                <th>Installment (%)</th>
                <th>No Installment</th>
                <th>Installment Period</th>
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





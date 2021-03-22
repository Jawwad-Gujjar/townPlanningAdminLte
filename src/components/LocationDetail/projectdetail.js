import React, { Component } from 'react';
import axios from 'axios';
import Installmentropdown from '../policy/installdropdown';
import PlanRow from '../policy/plantable'
import Dropdewnitem from './dropdown';  //filling project dropdonw
const apihit = require('../../routecontroller')

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeplanTitle= this.onChangeplanTitle.bind(this);
    this.onChangebooking = this.onChangebooking.bind(this);
    this.onChangeinstallmentP = this.onChangeinstallmentP.bind(this);
    this.onChangenoInstallment = this.onChangenoInstallment.bind(this);
    //projects:[] use to fill project drop down list
    this.state = {installment: [] , business:[],projects:[]};
    this.selectedIndex = this.selectedIndex.bind(this);
    this.selectedIndexProject=this.selectedIndexProject.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    projects:[],
    plan_title: '',
     booking: '',
     installment_P :'',
     installment: [],
     business : [],
     installmentname:'',
     installmentKey :'',
     projectName:'',
    }
  }

  selectedIndexProject(e){

    // var installmentName=""
    // var ddl=document.getElementById("ddlinst")
    // installmentName = ddl.options[ddl.selectedIndex].text
    // var installmentKey=e.target.value
    console.log(e.target.value)
    this.setState({
        projectName: e.target.value
    })
  
    console.log(this.state.projectName)
  }
  
  selectedIndex(e){
      console.log(this.state.projectName)
  var installmentName=""
  var ddl=document.getElementById("ddlinst")
  installmentName = ddl.options[ddl.selectedIndex].text
  var installmentKey=e.target.value
  console.log(installmentKey)
  this.setState({
      installmentname:installmentName,
      installmentKey :installmentKey
  })

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

    axios.get(apihit.APIHIT+'/project')
      .then(response => {
        this.setState({ projects: response.data });
        
        //console.log(this.state.projects)
      })
      .catch(function (error) {
        //console.log(error);
      })

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


//filling project name list 
  ddlproject(){
    return this.state.projects.map(function(object, i){
        return <Dropdewnitem obj={object} key={i} />;
    });
  }

  render() {
    //componentDidMount()
    return (
        <div  style={{ marginTop: 10 }}>
            <form>
            <div className="form-group">
                    <label>Project Name</label>
                    <br/>
                    <select id="ddlpro" style={{width:500}} onChange={this.selectedIndexProject} >
                        {this.ddlproject()}                      
                    </select>
                </div>
                <div className="form-group">
                    <label>Plan Title:  </label>
                    <input 
                      type="text" 
                      style={{width: 500}}
                      className="form-control" 
                      value={this.state.plan_title}
                      onChange={this.onChangeplanTitle}
                      /> 
                </div>
                <div className="form-group">
                    <label>Booking (%): </label>
                    <input type="text" 
                    style={{width: 500}}
                      className="form-control"
                      value={this.state.booking}
                       onChange={this.onChangebooking}
                      />
                </div>
                <div className="form-group">
                    <label>Installment (%): </label>
                    <input type="text" 
                      className="form-control"
                      style={{width: 500}}
                      value={this.state.installment_P}
                       onChange={this.onChangeinstallmentP}
                      />
                </div>
                <div className="form-group">
                    <label> No . Of Installment: </label>
                    <input type="text" 
                    style={{width: 500}}
                      className="form-control"
                      value={this.state.no_Installment}
                       onChange={this.onChangenoInstallment}
                      />
                </div>
                <div>
                    <label>Installment Period</label>
                    <br/>
                    <select id="ddlinst" style={{width:500}} onChange={this.selectedIndex}>
                      <option>---Please Select---</option>
                    {this.ddlinstallment()}
                    </select>
                    </div>
<br/>
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


    )
  }
}





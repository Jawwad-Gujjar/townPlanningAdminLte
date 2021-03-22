import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './locdittable';
import Dropdewnitem from './dropdown';
import Locationdropdown from './locationdropdown'
import Typedropdown from './loctypedropdown'
import Areadropdown from './areadropdown'
const apihit = require('../../routecontroller')



export default class Locationdetail extends Component {
  constructor(props) {
    super(props);
    this.onChangeserialFrom = this.onChangeserialFrom.bind(this);
    this.onChangeserialTo = this.onChangeserialTo.bind(this);
    this.state = { business: [], location: [], projects: [], locationtypes: [], area: [], pdetail: {} };
    this.onSubmit = this.onSubmit.bind(this);
    this.selectedIndex = this.selectedIndex.bind(this);
    this.selectedIndexloc = this.selectedIndexloc.bind(this);
    this.selectedIndexloctype = this.selectedIndexloctype.bind(this);
    this.selectedIndexarea = this.selectedIndexarea.bind(this);
    this.state = {
      location: [],
      business: [],
      projects: [],
      locationtypes: [],
      area: [],
      serial_From: '',
      serial_To: '',
      pdetail: [],
      pdetailSelected: [],
      projectName: "",
      projectKey: "",
      locationName: "",
      locationKey: "",
      loctypeName: "",
      loctypeKey: "",
      areaName: "",
      areaKey: "",
      selectedProject: {},
      submitok: false,
    }
  }
  selectedIndex(e) {
    
    this.setState({
      pdetailSelected: '',
    })
    
     var ddlx = document.getElementById("ddlloc")
     ddlx.options[ddlx.selectedIndex].text = "---Please Select---"
    var ddly = document.getElementById("ddlloctype")
    ddly.options[ddly.selectedIndex].text = "---Please Select---"
    var ddlz = document.getElementById("ddlarea")
    ddlz.options[ddlz.selectedIndex].text = "---Please Select---"
    var projectName = ""
    var ddl = document.getElementById("ddlpro")
    projectName = ddl.options[ddl.selectedIndex].text
    var projectKey = e.target.value
    var ProjectDetail = []
    console.log(this.state.pdetail)
    for (var i = 0; i < this.state.pdetail.length; i++) {
      if (projectKey == this.state.pdetail[i]['projectKey']) {
        ProjectDetail.push(this.state.pdetail[i])
      }
    }

    this.setState({
      projectName: projectName,
      projectKey: projectKey,
      pdetailSelected: ProjectDetail,
    })

    
  }

  selectedIndexloc(e) {
      var ProjectDetailL = this.state.pdetailSelected
    this.setState({
      pdetailSelected: ''
    })

    var locationName = ""        
    var ddl = document.getElementById("ddlloc")
    locationName = ddl.options[ddl.selectedIndex].text
    var locationKey = e.target.value
    var locationDetaila = []
    for (var i = 0; i < ProjectDetailL.length; i++) {
      if (ProjectDetailL[i]['locationKey'] == locationKey) {
      locationDetaila.push(ProjectDetailL[i])
      }
    }
    this.setState({
      locationName: locationName,
      locationKey: locationKey,
      pdetailSelected: locationDetaila,
    })
  }
  selectedIndexloctype(e) {
    var ProjectDetailL = this.state.pdetailSelected
    var ddl = document.getElementById("ddlloc")
    var locationKey = ddl.options[ddl.selectedIndex].value
    var loctypeName = ""
    var ddl = document.getElementById("ddlloctype")
    loctypeName = ddl.options[ddl.selectedIndex].text
    var loctypeKey = e.target.value
    var typeDetail = []
    for (var i = 0; i < ProjectDetailL.length; i++) {
      if (loctypeKey == ProjectDetailL[i]['loctypeKey'] && ProjectDetailL[i]['locationKey'] == locationKey) {
        typeDetail.push(ProjectDetailL[i])
      }
    }
    this.setState({
      loctypeName: loctypeName,
      loctypeKey: loctypeKey,
      pdetailSelected: typeDetail,
    })
  }
  selectedIndexarea(e) {
    var ddl = document.getElementById("ddlloc")
    var locationKey = ddl.options[ddl.selectedIndex].value
    var ddl = document.getElementById("ddlloctype")
    var loctypeKey= ddl.options[ddl.selectedIndex].value
    var ProjectDetailL = this.state.pdetailSelected
    this.setState({
      pdetailSelected: '',
      numOfunit: ''
    })
    var areaName = ""
    var ddl = document.getElementById("ddlarea")
    areaName = ddl.options[ddl.selectedIndex].text
    var areaKey = e.target.value
    var areaDetail = []
    for (var i = 0; i < ProjectDetailL.length; i++) {
      if (areaKey == ProjectDetailL[i]['areaKey']&& ProjectDetailL[i]['locationKey'] == locationKey && loctypeKey == ProjectDetailL[i]['loctypeKey']) {
        areaDetail.push(ProjectDetailL[i])
      }
    }
console.log(areaDetail)
    this.setState({
      areaName: areaName,
      areaKey: areaKey,
      pdetailSelected: areaDetail,
      numOfunit: areaDetail['numOfunit']
    })
   }

  onChangeserialFrom(e) {
    this.setState({
      serial_From: e.target.value
    })
  }
  onChangeserialTo(e) {
    this.setState({
      serial_To: e.target.value
    })
  }

// saving data
  onSubmit(e) {
    e.preventDefault();
    if(this.state.pdetailSelected.length>0){
      if(this.state.pdetailSelected[0].hasOwnProperty('numOfunit')){
        alert('Record Already Exist')
        return
      }
    }
     var numOfunit = []
    for (var i = this.state.serial_From; i <= this.state.serial_To; i++) {
      var objD = { sno: i, status: "Avaliable" }
      numOfunit.push(objD)
    }
    const obj = {
      projectName: this.state.projectName,
      projectKey: this.state.projectKey,
      locationName: this.state.locationName,
      locationKey: this.state.locationKey,
      loctypeKey: this.state.loctypeKey,
      loctypeName: this.state.loctypeName,
      areaKey: this.state.areaKey,
      areaName: this.state.areaName,
      serial_From: this.state.serial_From,
      serial_To: this.state.serial_To,
      numOfunit:numOfunit,
    };
    console.log(obj)
    axios.post(apihit.APIHIT+'/projectdetail/addpdetail', obj)
        // .then(res => console.log(res.data));
    this.setState({
      projectName: '---Please Select---',
      locationName: '---Please Select---',
      loctypeName: '---Please Select---',
      areaName: '---Please Select---',
      serial_From: '',
      serial_To: ''
    })
  }
//  Get Data In Dropdown
  componentDidMount() {
    axios.get(apihit.APIHIT + '/projectdetail')
      .then(response => {
        this.setState({ pdetail: response.data });
      })
      .catch(function (error) {
      })
    axios.get(apihit.APIHIT + '/project')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(function (error) {
      })


    axios.get(apihit.APIHIT + '/business')
      .then(response => {
        this.setState({ location: response.data });
      })
      .catch(function (error) {
      })

    axios.get(apihit.APIHIT + '/contacts')
      .then(response => {
        this.setState({ locationtypes: response.data });
      })
      .catch(function (error) {
      })
    axios.get(apihit.APIHIT + '/area')
      .then(response => {
        this.setState({ area: response.data });
      })
      .catch(function (error) {
      })
  }
  ddlproject() {
    return this.state.projects.map(function (object, i) {
      return <Dropdewnitem obj={object} key={i} />;
    });
  }

  ddllocation() {
    return this.state.location.map(function (object, i) {
      return <Locationdropdown obj={object} key={i} />;
    })
  }
  ddllocationtype() {
    return this.state.locationtypes.map(function (object, i) {
      return <Typedropdown obj={object} key={i} />;
    })
  }
  ddlarea() {
    return this.state.area.map(function (object, i) {
      return <Areadropdown obj={object} key={i} />;
    })
  }
  // Get Data In Table                                           
  tabRow() {
    if(this.state.pdetailSelected.length>0){
      if(this.state.pdetailSelected[0].hasOwnProperty('numOfunit')){
    return this.state.pdetailSelected[0]['numOfunit'].map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  }
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <div className="main">
          <form className="form">
            <div>
              <div>
                <label>Project Name</label>
                <br />
                <select id="ddlpro" style={{ width: 300 }} onChange={this.selectedIndex} >
                  <option value="0">---Please Select---</option>
                  {this.ddlproject()}
                </select>
              </div>
              <div>
                <label>Location Category</label>
                <br />
                <select id="ddlloc" style={{ width: 300 }} onChange={this.selectedIndexloc}>
                  <option>---Please Select---</option>
                  {this.ddllocation()}
                </select>
              </div>
              
              <div>
                <label>Location Type</label>
                <br />
                <select id="ddlloctype"  onChange={this.selectedIndexloctype} style={{ width: 300 }}>
                  <option>---Please Select---</option>
                  {this.ddllocationtype()}
                </select>
              </div>
              <div>
                <label >Area</label>
                <br />
                <select id="ddlarea" onChange={this.selectedIndexarea} style={{ width: 300 }} >
                  <option>---Please Select---</option>
                  {this.ddlarea()}
                </select>
              </div>
            </div>
            <div>
              <label>Serial From</label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.serial_From}
                onChange={this.onChangeserialFrom} />
            </div>
            <div>
              <label> Serial To</label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.serial_To}
                onChange={this.onChangeserialTo}
              />

            </div>
            <div className="form-group">
              <input type="submit" value=" Save" className="btn btn-primary" onClick={this.onSubmit} />
            </div>
          </form>


          <h3 align="center">Location List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Serial Number </th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>


              {this.tabRow()}
            </tbody>
          </table>`
          </div>
      </div>


    )
  }
}

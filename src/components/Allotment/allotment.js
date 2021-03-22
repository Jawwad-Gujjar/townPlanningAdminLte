import React, { Component } from 'react';
import axios from 'axios';
import Customerdropdown from './customerdropdown'
import Brokerdropdown from './brokerdropdown'
import Projectdropdown from './projectdropdown'
import Locationdropdown from './locationdropdown'
import Loctypedropdown from './loctypedropdown'
import Areadropdown from './areadropdown'
import TableRow from './allotmenttable'
import Plandropdown from './plandropdown'



export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeallotmentNo = this.onChangeallotmentNo.bind(this);
    this.onChangeallotmentDate = this.onChangeallotmentDate.bind(this);
    this.onChangecustomerAddress = this.onChangecustomerAddress.bind(this);
    this.onChangecontactNo = this.onChangecontactNo.bind(this);
    this.onChangecammission = this.onChangecammission.bind(this);
    this.onChangeremarks = this.onChangeremarks.bind(this);
    this.selectedIndexCus = this.selectedIndexCus.bind(this);
    this.selectedIndexbro = this.selectedIndexbro.bind(this);
    this.selectedIndexplan = this.selectedIndexplan.bind(this);
    this.onChangerate = this.onChangerate.bind(this);
    this.onChangetotalCost = this.onChangetotalCost.bind(this);
    this.bookingAmount = this.bookingAmount.bind(this);
    this.onChangeremindAmount = this.onChangeremindAmount.bind(this);
    this.onCompleteSelect = this.onCompleteSelect.bind(this);
    this.state = {
      business: [], customer: [], broker: [], project: [],
      plan: [], location: [], area: [], locationtype: []
    };
    //this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      allotment_No: '',   //ye allotment no ha jo saving karwate hoe kam aata ha ye text box se set hota 
      allotment_Date: '', //=
      customer_Address: '',//Ye  custome k drop down pr set hona chea but abi nahi ho raha
      contact_No: '',    //===
      commission: '',    //===
      remarks: '',      //manual dena ha
      rate: '',        //====
      totalCost: '',    // total cost rate dene par area or rate k p
      business: [],
      customer: [],    //customer drop down fill karne k lea use ho raha ha
      broker: [],     //broker ka drop down fill karne k lea use ho raha ha
      project: [],    // Sare projects k data la raha ha or dropdown fill ho raha ha is me project ki detail nahi
      location: [],   //Location se Category means k shop/flate/plote/godown etc drop dwon 
      area: [],     // Area 80/120/ sq guz 
      locationtype: [],  //is me plote/flate etc ki type means k A/B/C ya West/East/corner/parkfacing
      plan: [],       //Installment plane booking % 
      pdetail: [],    //  all projects with complete detail ? kitne units hn 
      pdetailSelected: [],
      projectName: "",  //project k dropdown k selected index change pr set krte hn or saving me kam aata ha
      projectKey: "",  //===
      locationName: "",//===
      locationKey: "",//===
      loctypeName: "",//==
      loctypeKey: "",//==
      areaName: "",//==
      areaKey: "",//==
      customerName: "",//==
      customerKey: "",//==
      brokerName: "",//==
      brokerKey: "",//==
      planName: "",//==
      planKey: "",//==
      selectedProject: {},
      booking: '',// 
      bookingAmount: '',//plane se booking % se rate ko multiply kr k jo cost banti ha os se nikalte hn
      remindAmount: '',// Total cost se booking amount minus kr k niklte hn or installlment amount k lea use hota ha
      no_installment: '',//plan se get krte hn or remaining amount ko is se divide kr k itni installment banane k lea
      installmentname: '',// Installment monthly/quarly  etc
      installmentAfter: '',//
    }
  }
  // get data from plan Dropdown
  selectedIndexplan(e) {
    var planName = ""
    var ddl = document.getElementById("ddlplan")
    planName = ddl.options[ddl.selectedIndex].text
    var planKey = e.target.value
    this.setState({
      planName: planName,
      planKey: planKey
    })
    for (var i = 0; i < this.state.plan.length; i++) {
      console.log(planKey, this.state.plan[i]['_id'])
      if (planKey == this.state.plan[i]['_id']) {
        this.setState({
          booking: this.state.plan[i]["booking"],
          no_installment: this.state.plan[i]['no_Installment'],
          installmentname: this.state.plan[i]['installmentname'],
          installmentAfter: this.state.plan[i]['installmentAfter']
        })
      }
    }
  }
  // get data from customer Dropdown
  selectedIndexCus(e) {
    var customerName = ""
    var ddl = document.getElementById("ddlcustomer")
    customerName = ddl.options[ddl.selectedIndex].text
    var customerKey = e.target.value
    this.setState({
      customerName: customerName,
      customerKey: customerKey
    })
    for (var i = 0; i < this.state.customer.length; i++) {
      if (e.target.value == this.state.customer[i]['_id']) {
        this.setState({
          customer_Address: this.state.customer[i]["present_Address"],
           contact_No : this.state.customer[i]["cell_No"]
        })
      }
    }
  }
  //get data from broker Dropdown
  selectedIndexbro(e) {
    var brokerName = ""
    var ddl = document.getElementById("ddlbroker")
    brokerName = ddl.options[ddl.selectedIndex].text
    var brokerKey = e.target.value
    this.setState({
      brokerName: brokerName,
      brokerKey: brokerKey
    })
    for (var i = 0; i < this.state.broker.length; i++) {
      if (e.target.value == this.state.broker[i]['_id']) {
        this.setState({
          commission : this.state.broker[i]["commission"]
        })
      }
    }
  }
  //get data from  Dropdown
  onCompleteSelect(e) {
    var ddl = document.getElementById("ddlpro")
    var projectName = ddl.options[ddl.selectedIndex].text
    var projectKey = ddl.options[ddl.selectedIndex].value

    var ddl = document.getElementById("ddlloc")
    var locationKey = ddl.options[ddl.selectedIndex].value
    var locationName = ddl.options[ddl.selectedIndex].text

    var ddl = document.getElementById("ddlloctype")
    var loctypeKey = ddl.options[ddl.selectedIndex].value
    var loctypeName = ddl.options[ddl.selectedIndex].text

    var ddl = document.getElementById("ddlarea")
    var areaName = ddl.options[ddl.selectedIndex].text
    var areaKey = ddl.options[ddl.selectedIndex].value
    var areaDetail = []
    for (var i = 0; i < this.state.pdetail.length; i++) {
      if (projectKey == this.state.pdetail[i]['projectKey'] && areaKey == this.state.pdetail[i]['areaKey'] && this.state.pdetail[i]['locationKey'] == locationKey && loctypeKey == this.state.pdetail[i]['loctypeKey']) {
        areaDetail.push(this.state.pdetail[i])
      }
    }
    console.log(areaDetail)
    this.setState({
      projectName: projectName,
      projectKey: projectKey,

      locationName: locationName,
      locationKey: locationKey,

      loctypeName: loctypeName,
      loctypeKey: loctypeKey,

      areaName: areaName,
      areaKey: areaKey,

      pdetailSelected: areaDetail,
      numOfunit: areaDetail['numOfunit']
    })
  }


  onChangeallotmentNo(e) {
    this.setState({
      allotment_No: e.target.value
    });
  }
  onChangeallotmentDate(e) {
    this.setState({
      allotment_Date: e.target.value
    })
  }
  onChangerate(e) {
    this.setState({
      rate: e.target.value
    })

    var totcost = this.state.areaName * e.target.value
    var bookingamount = totcost * this.state.booking / 100
    var remamount = totcost - bookingamount
    this.setState({
      totalCost: totcost,
      bookingAmount: bookingamount,
    })
  }
  onChangeremindAmount(e) {
    this.setState({
      remindAmount: e.target.value
    })
  }
  onChangetotalCost(e) {
    this.setState({
      totalCost: e.target.value
    })
  }
  bookingAmount(e) {
    this.setState({
      bookAmount: e.target.value
    })
  }
  onChangecustomerAddress(e) {
    this.setState({
      customer_Address: e.target.value
    })
  }
  onChangecontactNo(e) {
    this.setState({
      contact_No: e.target.value
    })
  }
  onChangecammission(e) {
    this.setState({
      commission: e.target.value
    })
  }
  onChangeremarks(e) {
    this.setState({
      remarks: e.target.value
    })
  }
  componentDidMount() {
    axios.get('http://localhost:4010/projectdetail')
      .then(response => {
        this.setState({ pdetail: response.data });

      })
      .catch(function (error) {
      })
    axios.get('http://localhost:4010/business')
      .then(response => {
        this.setState({ business: response.data });

      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:4010/policy')
      .then(response => {
        this.setState({ plan: response.data });

      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:4010/customer')
      .then(response => {
        this.setState({ customer: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:4010/broker')
      .then(response => {
        this.setState({ broker: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:4010/project')
      .then(response => {
        this.setState({ project: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:4010/business')
      .then(response => {
        this.setState({ location: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:4010/contacts')
      .then(response => {
        this.setState({ locationtype: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:4010/area')
      .then(response => {
        this.setState({ area: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {

    var myo = []
    const obj = {
      allotment_No: this.state.allotment_No,
      allotment_Date: this.state.allotment_Date,
      customer_Address: this.state.customer_Address,
      contact_No: this.state.contact_No,
      commission: this.state.commission,
      remarks: this.state.remarks,
      customerName: this.state.customerName,
      customerKey: this.state.customerKey,
      brokerName: this.state.brokerName,
      brokerKey: this.state.brokerKey,
      projectName: this.state.projectName,
      projectKey: this.state.projectKey,
      locationName: this.state.locationName,
      locationKey: this.state.locationKey,
      loctypeName: this.state.loctypeName,
      loctypeKey: this.state.loctypeKey,
      areaName: this.state.areaName,
      areaKey: this.state.areaKey,
      planName: this.state.planName,
      planKey: this.state.planKey,
      rate: this.state.rate,
      totalCost: this.state.totalCost,
      bookingAmount: this.state.bookingAmount,
      remindAmount: this.state.remindAmount,
      no_installment: this.state.no_installment,
      installmentname: this.state.installmentname,
      installmentAfter: this.state.installmentAfter,
    };

    console.log(this.state.pdetailSelected)
    if (this.state.pdetailSelected.length > 0) {
      if (this.state.pdetailSelected[0].hasOwnProperty('numOfunit')) {
        var nArray = this.state.pdetailSelected[0]['numOfunit']
        myo = this.state.pdetailSelected[0]['numOfunit']

        for (var i = 0; i < this.state.pdetailSelected.length; i++) {
          console.log(this.state.pdetailSelected)
        }
        for (var i = 0; i < nArray.length; i++) {
          myo[i]['ProjectDetailKey'] = this.state.pdetailSelected[0]['_id']
          myo[i]['allotment_No'] = obj['allotment_No']
          myo[i]['allotment_Date'] = obj['allotment_Date']
          myo[i]['customer_Address'] = obj['customer_Address']
          myo[i]['contact_No'] = obj['contact_No']
          myo[i]['commission'] = obj['commission']
          myo[i]['remarks'] = obj['remarks']
          myo[i]['customerName'] = obj['customerName']
          myo[i]['customerKey'] = obj['customerKey']
          myo[i]['brokerName'] = obj['brokerName']
          myo[i]['brokerKey'] = obj['brokerKey']
          myo[i]['projectName'] = obj['projectName']
          myo[i]['projectKey'] = obj['projectKey']
          myo[i]['locationName'] = obj['locationName']
          myo[i]['locationKey'] = obj['locationKey']
          myo[i]['loctypeName'] = obj['loctypeName']
          myo[i]['loctypeKey'] = obj['loctypeKey']
          myo[i]['areaName'] = obj['areaName']
          myo[i]['areaKey'] = obj['areaKey']
          myo[i]['planName'] = obj['planName']
          myo[i]['planKey'] = obj['planKey']
          myo[i]['rate'] = obj['rate']
          myo[i]['totalCost'] = obj['totalCost']
          myo[i]['bookingAmount'] = obj['bookingAmount']
          myo[i]['remindAmount'] = obj['remindAmount']
          myo[i]['no_installment'] = obj['no_installment']
          myo[i]['installmentname'] = obj['installmentname']
          myo[i]['installmentAfter'] = obj['installmentAfter']
        }

        return myo.map(function (object, i) {
          return <TableRow obj={object} key={i} />;
        });
      }
    }
  }
  ddlcustomer() {
    return this.state.customer.map(function (object, i) {
      return <Customerdropdown obj={object} key={i} />;
    });
  }
  ddlplan() {
    return this.state.plan.map(function (object, i) {
      return <Plandropdown obj={object} key={i} />;
    });
  }

  ddlbroker() {
    return this.state.broker.map(function (object, i) {
      return <Brokerdropdown obj={object} key={i} />;
    });
  }
  ddlproject() {
    return this.state.project.map(function (object, i) {
      return <Projectdropdown obj={object} key={i} />;
    });
  }
  ddllocation() {
    return this.state.location.map(function (object, i) {
      return <Locationdropdown obj={object} key={i} />;
    });
  }
  ddlarea() {
    return this.state.area.map(function (object, i) {
      return <Areadropdown obj={object} key={i} />;
    });
  }
  ddlloctype() {
    return this.state.locationtype.map(function (object, i) {
      return <Loctypedropdown obj={object} key={i} />;
    });
  }
  render() {

    return (
      <div style={{ marginTop: 10 }}>
        <div className="main">
          <form>

            <div className="form-group">
              <label>Allotment Number:  </label>
              <input
                style={{ width: 300 }}
                type="text"
                className="form-control"
                value={this.state.allotment_No}
                onChange={this.onChangeallotmentNo}
              />
            </div>
            <div className="form-group">
              <label>Allotment Date: </label>
              <input type="date"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.allotment_Date}
                onChange={this.onChangeallotmentDate}
              />
            </div>
            <form style={{ backgroundColor: 'lightgrey', width: 400 }}>
              <div >
                <label>Customer Name</label>
                <br />
                <select style={{ width: 300 }} id="ddlcustomer" onChange={this.selectedIndexCus}>
                  <option>---Please Select---</option>
                  {this.ddlcustomer()}
                </select>
              </div>
              <div className="form-group">
                <label>Customer Address: </label>
                <input type="text"
                  style={{ width: 300 }}
                  className="form-control"
                  value={this.state.customer_Address}
                  onChange={this.onChangecustomerAddress}
                />
              </div>
              <div className="form-group">
                <label>Customer contact No: </label>
                <input type="text"
                  style={{ width: 300 }}
                  className="form-control"
                  value={this.state.contact_No}
                  onChange={this.onChangecontactNo}
                />
              </div>
              <br />
            </form>
            <div >
              <label>Broker Name</label>
              <br />
              <select style={{ width: 300 }} id="ddlbroker" onChange={this.selectedIndexbro}>
                <option>---Please Select---</option>
                {this.ddlbroker()}
              </select>
            </div>
            <div className="form-group">
              <label>Cammission (%): </label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.commission}
                onChange={this.onChangecammission}
              />
            </div>
            <div className="form-group">
              <label>Remarks: </label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.remarks}
                onChange={this.onChangeremarks}
              />
            </div>

            <div>
              <label>Project Name</label>
              <br />
              <select id="ddlpro" style={{ width: 300 }} onChange={this.onCompleteSelect}>
                <option>---Please Select---</option>
                {this.ddlproject()}
              </select>
            </div>

            <div >
              <label>Location Category</label>
              <br />
              <select id="ddlloc" style={{ width: 300 }} onChange={this.onCompleteSelect}>
                <option>---Please Select---</option>
                {this.ddllocation()}
              </select>
            </div>
            <div >
              <label>Location Type</label>
              <br />
              <select style={{ width: 300 }} id="ddlloctype" onChange={this.onCompleteSelect}>
                <option>---Please Select---</option>
                {this.ddlloctype()}
              </select>
            </div>
            <div >
              <label>Area</label>
              <br />
              <select style={{ width: 300 }} id="ddlarea" onChange={this.onCompleteSelect}>
                <option>---Please Select---</option>
                {this.ddlarea()}
              </select>
            </div>
            <div >
              <label>Installment Plan</label>
              <br />
              <select style={{ width: 300 }} id="ddlplan" onChange={this.selectedIndexplan}>
                <option>---Please Select---</option>
                {this.ddlplan()}
              </select>
            </div>
            <div className="form-group">
              <label>Rate: </label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.rate}
                onChange={this.onChangerate}
              />
            </div>
            <div className="form-group">
              <label>Total Cost: </label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.totalCost}
                onChange={this.onChangetotalCost}
              />
            </div>
            <div className="form-group">
              <label>Booking Amount : </label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.bookingAmount}
                onChange={this.bookingAmount}
              />
            </div>
            <div className="form-group">
              <label>Remind  Amount : </label>
              <input type="text"
                style={{ width: 300 }}
                className="form-control"
                value={this.state.remindAmount}
                onChange={this.onChangeremindAmount}
              />
            </div>
            <br />
          </form>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Status</th>
                <th>Allot</th>
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


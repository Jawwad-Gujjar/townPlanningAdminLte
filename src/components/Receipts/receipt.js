import React,{Component} from 'react'
import axios from 'axios';
import Receivedropdown from './receiveddropdown'
import Paymentropdown from './paymentdropdown'
import Allotmentdropdown from './allotmentdropdown'
import TableRow from './receipttable'
const apihit = require('../../routecontroller')

export default class Receipt extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeslip = this.onChangeslip.bind(this);
        this.selectedIndexreceived = this.selectedIndexreceived.bind(this);
        this.selectedIndexpayment = this.selectedIndexpayment.bind(this);
        this.onChangeremarks = this.onChangeremarks.bind(this);
        this.onChangevaucher = this.onChangevaucher.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangebalance = this.onChangebalance.bind(this);
        this.onChangeamount = this.onChangeamount.bind(this);
        this.selectedIndexAllotment = this.selectedIndexAllotment.bind(this);
        this.state ={table:[]};
this.state = {
    slip :'',      //ye slip no ha jo saving karwate hoe kam aata ha ye text box se set hota                                             
    remarks : '', //=
    vaucher : '', //=                    
    date : '',   //=
    balance :'',//ye customer ka balance ha jo saving karwate hoe kam aata ha ye text box se set hota 
    amount : '',//=
    payment : [], //payment mode ka drop down fill karne k lea use ho raha ha
    received : [], //customer ka drop down fill karne k lea use ho raha ha
    allotment : [], //allotment number ka drop down fill karne k lea use ho raha ha
    customerAllotment:[],//allotment sa data lana ka lea use ho raha ha
    customerAllotmentSelected:'',
    table : [], //table fill karna ka lea use ho raha ha 
    receivedName : '',//customer ka drop down sa data savin ka lea use ho raha ha 
    receivedKey : '',//=
    paymentName : '',//payment mode ka drop down sa data savin ka lea use ho raha ha 
    paymentKey : '',//=
    allotmentName : '', //allotment number ka drop down sa data savin ka lea use ho raha ha
    allotmentKey : '',//=
}    
    }
    selectedIndexreceived(e){
        var receivedName=""
        var ddl=document.getElementById("ddlrec")
        receivedName = ddl.options[ddl.selectedIndex].text
        var receivedKey=e.target.value
        var customerAllotment=[]
        for(var i=0; i<this.state.allotment.length; i++){
            if(this.state.allotment[i]['customerKey']==e.target.value){
                
                    customerAllotment.push(this.state.allotment[i])
            }
        }
        this.setState({
            receivedName:receivedName,
            receivedKey :receivedKey,
            customerAllotment: customerAllotment,
        })
      }
    
      selectedIndexAllotment(e){
        var allotmentName=""
        var ddl=document.getElementById("ddlallot")
        allotmentName = ddl.options[ddl.selectedIndex].text
        var allotmentKey
        var installmentDetail =[]
        var customerAllotmentSelected={}
        for(var i=0; i<this.state.customerAllotment.length; i++){
           if(e.target.value == this.state.customerAllotment[i]['_id']){
          customerAllotmentSelected = this.state.customerAllotment[i]
          installmentDetail = this.state.customerAllotment[i]['Installment Detail']
            }
        }
        this.setState({
            allotmentName:allotmentName,
            allotmentKey :allotmentKey,
            table : installmentDetail,
            customerAllotmentSelected : customerAllotmentSelected,
        })
      }
      selectedIndexpayment(e){
        var paymentName=""
        var ddl=document.getElementById("ddlpay")
        paymentName = ddl.options[ddl.selectedIndex].text
        var paymentKey=e.target.value
        this.setState({
            paymentName:paymentName,
            paymentKey :paymentKey
        })
      }
onChangeslip(e){
    this.setState({
        slip : e.target.value
    
    });
}
onChangeremarks(e){
    this.setState({
        remarks : e.target.value
    })
}
onChangevaucher(e){
    this.setState({
        vaucher : e.target.value
    })
}
onChangedate(e){
    this.setState({
        date : e.target.value
    })
}
onChangebalance (e){
    this.setState({
        balance : e.target.value
    })
}
onChangeamount (e){
    this.setState({
        amount : e.target.value
    })
}
    onSubmit(e){
        e.preventDefault();
        const obj = {
            slip: this.state.slip,
            remarks : this.state.remarks,
            date : this.state.date,
            vaucher: this.state.vaucher,
            balance : this.state.balance,
            amount : this.state.amount ,
            allotmentName : this.state.allotmentName,
            allotmentKey : this.state.allotmentKey,
            receivedName : this.state.receivedName,
            receivedKey : this.state.receivedKey,
            paymentName : this.state.paymentName,
            paymentKey : this.state.paymentKey,
            customerAllotmentSelected : this.state.customerAllotmentSelected
        };
        axios.post(apihit.APIHIT+'/receipt/addreceipt', obj)
            .then(res => console.log(res.data));
        
        this.setState({
          slip :'',
          remarks : '',
          date : '',
          balance : '',
          amount : '',
          vaucher : '',
        })
    }
    componentDidMount(){
          axios.get(apihit.APIHIT+'/customer')
          .then(response => {
            this.setState({ received: response.data });
     
          })
          axios.get(apihit.APIHIT+'/payment')
          .then(response => {
            this.setState({ payment: response.data });
          })
          axios.get(apihit.APIHIT+'/allotment')
          .then(response => {
            this.setState({ allotment: response.data });
          })
        }

        ddlpayment(){
            return this.state.payment.map(function(object, i){
                return <Paymentropdown obj={object} key={i} />;
            });
          }
        ddlreceived(){
            return this.state.received.map(function(object, i){
                return <Receivedropdown obj={object} key={i} />;
            });
          }
          ddlallotment(){
            return this.state.customerAllotment.map(function(object, i){
                return <Allotmentdropdown obj={object} key={i} />;
            });
          }
          tabRow(){
            return this.state.table.map(function(object, i){
                return <TableRow obj={object} key={i} />;
            });
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
               <div className="main">
                <form >
                    <div>
                    <label>Received From</label>
                    <br/>
                    <select id="ddlrec" style={{width:300}} onChange={this.selectedIndexreceived}>
                      <option selected>---Please Select---</option>
                      {this.ddlreceived()}
                </select>
                <div>
                    <label>Number Of Allotment</label>
                    <br/>
                    <select id="ddlallot" style={{width:300}} onChange={this.selectedIndexAllotment}>
                      <option selected>---Please Select---</option>
                      {this.ddlallotment()}
                </select>
                    </div>
                    </div>
                    <div>
                    <label>Payment Mode</label>
                    <br/>
                    <select id="ddlpay" style={{width:300}} onChange={this.selectedIndexpayment}>
                      <option selected>---Please Select---</option>
                      {this.ddlpayment()}
                </select>
                    </div>
       
                         <br/>
                    <div className="form-group">
                        <label> Cheque / Slip # :  </label>
                        <input 
                        style={{width:300 }}
                          type="text" 
                          className="form-control" 
                          value={this.state.slip}
                          onChange={this.onChangeslip}/>
                    </div>
                    <div className="form-group">
                        <label>Remarks: </label>
                        <input 
                        style={{width:300}}
                        type="text" 
                          className="form-control"
                          value={this.state.remarks}
                          onChange={this.onChangeremarks}/>
                    </div>
                    <div className="form-group">
                        <label>Voucher Number: </label>
                        <input 
                        style={{width:300}}
                        type="text" 
                          className="form-control"
                          value={this.state.vaucher}
                          onChange={this.onChangevaucher}/>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input 
                        style={{width:300}}
                        type="date" 
                          className="form-control"
                          value={this.state.date}
                          onChange={this.onChangedate}/>
                    </div>
                    <div className="form-group">
                        <label>Customer Balance: </label>
                        <input 
                        style={{width:300}}
                        type="text" 
                          className="form-control"
                          value={this.state.balance}
                          onChange={this.onChangebalance}/>
                    </div>
                    <div className="form-group">
                        <label>Amount Paid: </label>
                        <input 
                        style={{width:300}}
                        type="text" 
                          className="form-control"
                          value={this.state.amount}
                          onChange={this.onChangeamount}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" onClick={this.onSubmit}/>
                    </div>
    
                </form>
                <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Installment Date </th>
                <th>Amount</th>
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
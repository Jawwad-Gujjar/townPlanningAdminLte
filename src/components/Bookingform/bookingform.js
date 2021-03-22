import React, { Component } from 'react';
import axios from 'axios';
const apihit = require('../../routecontroller')

export default class Create extends Component{
    constructor(props) {
        super(props);
          this.onChangename = this.onChangename.bind(this);        
          this.onChangefatherName = this.onChangefatherName.bind(this);
          this.onChangeaddress = this.onChangeaddress.bind(this);
          this.onChangeoffice = this.onChangeoffice.bind(this);
          this.onChangecnic = this.onChangecnic.bind(this);
          this.onChangetelOffice = this.onChangetelOffice.bind(this);
          this.onChangecell = this.onChangecell.bind(this);
          this.onChangenName = this.onChangenName.bind(this);
          this.onChangenCnic = this.onChangenCnic.bind(this);
          this.onChangenAddress = this.onChangenAddress.bind(this);
          this.onChangeplotNo = this.onChangeplotNo.bind(this);
          this.onChangesize = this.onChangesize.bind(this);
          this.onChangepreSpace = this.onChangepreSpace.bind(this);
          this.onChangetype = this.onChangetype.bind(this);
          this.onChangeblock = this.onChangeblock.bind(this);
          this.onChangebasicrate = this.onChangebasicrate.bind(this);
          this.onChangepremium = this.onChangepremium.bind(this);
          this.onChangenetSale = this.onChangenetSale.bind(this);
          this.onChangediscount = this.onChangediscount.bind(this);
          this.onChangeinWords = this.onChangeinWords.bind(this);
          this.onChangeremarks = this.onChangeremarks.bind(this);
          this.onChangebookedBy = this.onChangebookedBy.bind(this);
          this.onChangeagentName = this.onChangeagentName.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name :'', // customer ka nam ko saving karwate hoe kam aata ha ye text box se set hota 
            fatherName :'',// customer fatherName ka nam ko saving karwate hoe kam aata ha ye text box se set hota 
            address :'',// address ko saving karwate hoe kam aata ha ye text box se set hota 
            office :'',// office address ko saving karwate hoe kam aata ha ye text box se set hota 
            cnic :'',  // CNIC Number ko saving karwate hoe kam aata ha ye text box se set hota 
            telOffice :'',
            cell :'', 
            nName : '', // Nominee Name ko saving karwate hoe kam aata ha ye text box se set hota 
            nCnic : '', // Nominee CNIC Number ko saving karwate hoe kam aata ha ye text box se set hota 
            nAddress: '',// Nominee ka Address ko saving karwate hoe kam aata ha ye text box se set hota 
            plotNo : '', // plot number ko saving karwate hoe kam aata ha ye text box se set hota 
            size : '', // area ya size ko saving karwate hoe kam aata ha ye text box se set hota 
            preSpace :'',
            type :'',
            block : '',
            basicrate: '',
            premium : '',
            netSale : '',
            discount : '',
            inWords : '',
            remarks : '',
            bookedBy :'',
            agentName : '',
        }
      }
      onChangename(e){
          this.setState({
              name:e.target.value
          })
      }0
      onChangefatherName(e){
          this.setState({
              fatherName:e.target.value
          })
      }
      onChangeaddress(e){
          this.setState({
              address:e.target.value
          })
      }
      onChangeoffice(e){
          this.setState({
              office: e.target.value
          })
      }
      onChangecnic(e){
          this.setState({
              cnic: e.target.value
          })
      }
      onChangetelOffice(e){
          this.setState({
              telOffice:e.target.value
          })
      }
      onChangecell(e){
          this.setState({
              cell:e.target.value
          })
      }
      onChangenName(e){
          this.setState({
              nName:e.target.value
          })
      }
      onChangenCnic(e){
          this.setState({
              nCnic:e.target.value
          })
      }
      onChangenAddress(e){
          this.setState({
              nAddress:e.target.value
          })
      }
      onChangeplotNo(e){
          this.setState({
              plotNo:e.target.value
          })
      }
      onChangesize(e){
          this.setState({
              size: e.target.value
          })
      }
      onChangepreSpace(e){
          this.setState({
          preSpace:e.target.value
        })
      }
      onChangetype(e){
          this.setState({
              type:e.target.value
          })
      }
      onChangeblock(e){
          this.setState({
              block : e.target.value
          })
      }
     onChangebasicrate(e){
         this.setState({
             basicrate :e.target.value
         })
     }

    onChangepremium(e){
        this.setState({
            premium : e.target.value
        })
    }
    onChangenetSale(e){
        this.setState({
            netSale : e.target.value
        })
    }
    onChangediscount(e){
        this.setState({
            discount : e.target.value
        })
    }
    onChangeinWords(e){
        this.setState({
            inWords : e.target.value
        })
    }
    onChangeremarks(e){
        this.setState({
            remarks : e.target.value
        })
    }
    onChangebookedBy(e){
        this.setState({
            bookedBy : e.target.value
        })
    }
    onChangeagentName(e){
        this.setState({
            agentName : e.target.value
        })
    } 
      onSubmit(e) {
        e.preventDefault();
        const obj = {
         name: this.state.name,
         fatherName: this.state.fatherName,
         address : this.state.address,
         office : this.state.office,
         cnic : this.state.cnic,
         telOffice : this.state.telOffice,
         cell : this.state.cell,
         nName:this.state.nName,
         nCnic: this.state.nCnic,
         nAddress: this.state.nAddress,
         plotNo : this.state.plotNo,
         size : this.state.size,
         preSpace : this.state.preSpace,
         type : this.state.type,
         block : this.state.block,
         basicrate : this.state.basicrate,
         premium : this.state.premium,
         netSale : this.state.netSale,
         discount : this.state.discount,
         inWords : this.state.inWords,
         remarks : this.state.remarks,
         bookedBy : this.state.bookedBy,
         agentName : this.state.agentName,
        };
        axios.post(apihit.APIHIT +'/booking/addbooking', obj)
            .then(res => console.log(res.data));
        
        this.setState({
         name:'',
         fatherName:'',
         address:'',
         office:'',
         cnic :'',
         telOffice:'',
         cell :'',
         nName : '',
         nCnic : '',
         nAddress: '',
         plotNo : '',
         size : '',
         preSpace :'',
         type :'',
         block : '',
         basicrate : '',
         premium : '',
         netSale : '',
         discount : '',
         inWords : '',
         remarks : '',
         bookedBy :'',
         agentName : '',
        })
      }    

    render(){
        return(
            <div style={{ marginTop: 10}}>
            <div className="main" style={{marginLeft:220  }}>
             <form >
                 <div style={{textAlign:'center'}}>
                     <hr />
                     <h5>PARTICULARS OF THE APPLICANT</h5>
                     <hr />
                 </div>
                 <div className="row" >
                 <div className="form-group" style={{marginLeft:15}} >
                     <label>Name:Mr./Mrs./Miss./M.  </label>
                     <input 
                     style={{width:300 }}
                       type="text" 
                       className="form-control" 
                       value={this.state.name}
                       onChange={this.onChangename}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:8}}>
                     <label>Father's/Husband's Name:/Mr. </label>
                     <input 
                     style={{width:300}}
                     type="text" 
                       className="form-control"
                       value={this.state.fatherName}
                       onChange={this.onChangefatherName}
                       />
                 </div>
                 </div>
                 <div className="form-group" >
                     <label>Address:(Residence) </label>
                     <input 
                     style={{width:608}}
                     type="text" 
                       className="form-control"
                       value={this.state.address}
                       onChange={this.onChangeaddress}
                       />
                 </div>
                 <div className="form-group">
                     <label>(Office) </label>
                     <input 
                     style={{width:608}}
                     type="text" 
                       className="form-control"
                       value={this.state.office}
                       onChange={this.onChangeoffice}
                       />
                 </div>
                 <div className="row">
                 <div className="form-group" style={{marginLeft:15}}>
                     <label>CNIC #  </label>
                     <input 
                     style={{width:200 }}
                       type="number" 
                       className="form-control" 
                       value={this.state.cnic}
                       onChange={this.onChangecnic}
                  
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:4}}>
                     <label>Tel Office </label>
                     <input 
                     style={{width:200}}
                     type="number" 
                       className="form-control"
                       value={this.state.telOffice}
                       onChange={this.onChangetelOffice}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:4}}>
                     <label>Cell # </label>
                     <input 
                     style={{width:200}}
                     type="number" 
                       className="form-control"
                       value={this.state.cell}
                       onChange={this.onChangecell}

                       />
                 </div>
                 </div>
           <div style={{textAlign:'center'}}>
           <hr />
               <h5>PARTICULARS OF THE ASSIGNEE / NOMINEE IN CASE OF DEATH</h5>
               <hr />
           </div>
           
 
                 <div className="row" >
                 <div className="form-group" style={{marginLeft:15}} >
                     <label>Nominee's Name   </label>
                     <input 
                     style={{width:400 }}
                       type="text" 
                       className="form-control" 
                       value={this.state.nName}
                       onChange={this.onChangenName}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:8}}>
                     <label>CNIC # </label>
                     <input 
                     style={{width:200}}
                     type="number" 
                       className="form-control"
                       value={this.state.nCnic}
                       onChange={this.onChangenCnic}
                       />
                 </div>
                 </div>
                 <div className="form-group" >
                     <label>Address: </label>
                     <input 
                     style={{width:608}}
                     type="text" 
                       className="form-control"
                       value={this.state.nAddress}
                       onChange={this.onChangenAddress}

                       />
                 </div>
                 <div style={{textAlign:'center'}}>
           <hr />
               <h5>BOOKING DETAIL</h5>
               <hr />
           </div>
           <div className="row" >
                 <div className="form-group" style={{marginLeft:15}} >
                     <label>Plot No.</label>
                     <input 
                     style={{width:200 }}
                       type="number" 
                       className="form-control" 
                       value={this.state.plotNo}
                       onChange={this.onChangeplotNo}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:4}}>
                     <label>Size (Sq.Yds) </label>
                     <input 
                     style={{width:200}}
                     type="text" 
                       className="form-control"
                       value={this.state.size}
                       onChange={this.onChangesize}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:4}}>
                     <label>Premium Space </label>
                     <input 
                     style={{width:200}}
                     type="text" 
                       className="form-control"
                       value={this.state.preSpace}
                       onChange={this.onChangepreSpace}
                       />
                 </div>
                 </div>
                 <div className="row" >
                 <div className="form-group" style={{marginLeft:15}} >
                     <label>Type</label>
                     <input 
                     style={{width:200 }}
                       type="text" 
                       className="form-control" 
                       value={this.state.type}
                       onChange={this.onChangetype}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:4}}>
                     <label>Block </label>
                     <input 
                     style={{width:200}}
                     type="text" 
                       className="form-control"
                       value={this.state.block}
                       onChange={this.onChangeblock}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:4}}>
                     <label>Basic Rate (Rs) </label>
                     <input 
                     style={{width:200}}
                     type="text" 
                       className="form-control"
                       value={this.state.basicrate}
                       onChange={this.onChangebasicrate}
                      />
                 </div>
                 </div>
                 <div className="row" >
                 <div className="form-group" style={{marginLeft:15}} >
                     <label>Premium   </label>
                     <input 
                     style={{width:300 }}
                       type="text" 
                       className="form-control" 
                       value={this.state.premium}
                       onChange={this.onChangepremium}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:8}}>
                     <label> Net Sale Value.(Rs)</label>
                     <input 
                     style={{width:300}}
                     type="text" 
                       className="form-control"
                       value={this.state.netSale}
                       onChange={this.onChangenetSale}
                    />
                 </div>
                 </div>
                 <div className="row" >
                 <div className="form-group" style={{marginLeft:15}} >
                     <label>Discount   </label>
                     <input 
                     style={{width:300 }}
                       type="text" 
                       className="form-control" 
                       value={this.state.discount}
                       onChange={this.onChangediscount}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:8}}>
                     <label>(In Words) </label>
                     <input 
                     style={{width:300}}
                     type="text" 
                       className="form-control"
                       value={this.state.inWords}
                       onChange={this.onChangeinWords}
                       />
                 </div>
                 </div>
                 <div className="form-group" >
                     <label>Remarks: </label>
                     <input 
                     style={{width:608}}
                     type="text" 
                       className="form-control"
                       value={this.state.remarks}
                       onChange={this.onChangeremarks}
                       />
                 </div>
                 <div className="row" >
                 <div className="form-group" style={{marginLeft:15}} >
                     <label>Booked By  </label>
                     <input 
                     style={{width:300 }}
                       type="text" 
                       className="form-control" 
                       value={this.state.bookedBy}
                       onChange={this.onChangebookedBy}
                       />
                 </div>
                 <div className="form-group" style={{marginLeft:8}}>
                     <label>Agent Name </label>
                     <input 
                     style={{width:300}}
                     type="text" 
                       className="form-control"
                       value={this.state.agentName}
                       onChange={this.onChangeagentName}
                       />
                 </div>
                 </div>

                 <div className="form-group">
                     <input type="submit" value="Save" className="btn btn-primary" onClick={this.onSubmit}/>
                 </div>
             </form>
</div> 
</div>
        )
    }
}
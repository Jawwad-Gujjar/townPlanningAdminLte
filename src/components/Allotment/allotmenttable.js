import React, { Component } from 'react';
import axios from 'axios';
const apihit = require('../../routecontroller')



class TableRow extends Component {
  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
          aArray :[]
          
        }         
       }
     delete() {
      console.log(this.props.obj)
      var installlmentDetail = []
      
      if(this.props.obj['status']=="Available"){

      var insAmount = this.props.obj['remindAmount'] /this.props.obj['no_installment']
      
      for (var i =1;i <= this.props.obj['no_installment']; i++){
        
        var objA=  {installmentDate : "", Amount:insAmount} 
        installlmentDetail.push(objA)
        console.log(installlmentDetail)
      }
}

      else{
        alert('Selected Unit is not Available to sell')
        return
      }

      var objSend=this.props.obj
      objSend['Installment Detail']=installlmentDetail
         axios.post(apihit.APIHIT +'/allotment/addallot', objSend)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  render() {
    console.log(this.props.obj)
    var mArray=[]
     mArray=this.state.aArray
     mArray.push(this.props.obj)
    console.log(mArray)
    return (
        <tr>
          <td>
            {this.props.obj.sno}
          </td>
          <td>  
            {this.props.obj.status}
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-danger">Allot</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
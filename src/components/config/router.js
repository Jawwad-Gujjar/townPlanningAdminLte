import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Location from '../Location/location';
import LocationType from '../Locationtype/locationtype';
import Area from '../Area/area'
import Project from '../Project/projectcreate'
import Installment from '../Installment/installment'
import Edit from '../Location/edit.location'
import Edittype from '../Locationtype/edit.type'
import locdtl from '../LocationDetail/locdtl'
import Home from './Home'
import Polyci from '../policy/polyci'
import Customer  from '../Customer/customer'
import Broker from '../Broker/broker'
import Allotment from '../Allotment/allotment'
import Payment from '../Payment/payment'
import Receipt from '../Receipts/receipt'
import Booking from '../Bookingform/bookingform'
class Mainrouter extends Component {
  render() {
    return (
        <div>
    <Router>       
                <Route path="/" component={Home}/>
                <Route path='/location' component={Location} />
                <Route path='/locationtype' component={ LocationType } />
                <Route path='/locdtl' component={ locdtl } />
                <Route path='/area' component={ Area } />
                <Route path='/payment' component={ Payment } />
                <Route path='/policy' component={Polyci} />
                <Route path='/customer' component={Customer} />
                <Route path='/broker' component={Broker}/>
                <Route path='/allotment' component={Allotment}/>
                <Route path='/receipt' component={Receipt}/>
                <Route path='/booking' component={Booking}/> 
                <Route path='/edittype/:id' component={Edittype} />
                <Route exact path='/installment' component={ Installment} />
                <Route exact path='/projectdetail' component={ Project} />
                <Route exact path='/edit/:id' component={ Edit} />          
    </Router>
        </div>
        );
  }
}

export default Mainrouter;
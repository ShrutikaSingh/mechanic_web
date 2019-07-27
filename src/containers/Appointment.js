import React,{Component,Fragment} from "react";
import axios from "axios";
class Appointment extends Component{
    constructor(props){
        super(props);
        this.state = {
            appointment_value:{ //every time the user type the characteers into thhose fields we want to update the visitor value
            ap_date:'',
            ap_time:'',
            ap_address:'',
            phone_num:'',
            email:'',
            inspection_package:'',
            summary:'',
        },
          apiResponse:"bhjbehjfb"
    }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(attr,e){
        console.log(attr+ ":" + e.target.value);
        const updatedChange= Object.assign({},this.state.appointment_value) //to update statee we have to first create copy
        updatedChange[attr]=e.target.value;//set the attribute that we passed in to the functions = the characters we type in fields of forms
        this.setState({ //now we can reset the state
            appointment_value : updatedChange
        })
    }
    submit_appointment(e){
        e.preventDefault();
        console.log('appointment fixed for :' + JSON.stringify(this.state.appointment_value));
        fetch('http://localhost:4000/appointment/')
        .then(res=>res.json())
        .then(appointment_value=>this.setState({appointment_value},()=> console.log("apoointment value is"+{appointment_value})))
        //.then(res=>this.setState({apiResponse:res}))
        .catch(err=>err);
        const details_change={
           updatedChange: this.state.appointment_value.email
        }
        console.log('updated chnage is'+this.state.appointment_value.email)
        axios.post('http://localhost:4000/appointment/post',this.state.appointment_value.email)
        .then(res=>res.json())
        .then(appointment_value=>this.setState({appointment_value},()=> console.log({appointment_value})))
        //.then(res=>this.setState({apiResponse:res}))
        .catch(err=>err);
    }
   
        render(){
            const { ap_date, ap_time,ap_address,phone_num,email,inspection_package,summary} = this.state
          return<Fragment>
            <div className="row">
                <div className="col-md-3">
                </div>
                    <div className="col-md-6">
                    <h1>Appointment</h1>
                        <form >
                            <label for="date">Date</label>
                            <input className="form-control" type={Date}  name="ap_date" placeholder="date" onChange={this.handleChange.bind(this, 'date')}></input>
                            <label for = "time">Time</label>
                            <input className="form-control" type={TimeRanges}  name="ap_time" onChange={this.handleChange.bind(this, 'time')}></input>
                            <label for="address">Address</label>
                            <input className="form-control" type='text' name='address' onChange={this.handleChange.bind(this,'address')}></input>
                            <label>Contact Number</label>
                            <input className="form-control" type="number" name="number" onChange={this.handleChange.bind(this, 'num')}></input>
                            <label>Email</label>
                            <input className="form-control" type="email" nmae="email" onChange={this.handleChange.bind(this, 'email')}></input>
                            <label>Inspection Package</label>
                            <input className="form-control" type="text"  name="inspection_package" placeholder="package" onChange={this.handleChange.bind(this, 'ins_package')}></input>
                            <labe>Summary</labe>
                            <input className="form-control" type="textarea"name="summary"></input>
                            <button type="submit" onClick={this.submit_appointment.bind(this)}>Submit</button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <p className="App-intro">{this.state.appointment_value.email}</p>
                    </div>
            </div>
        </Fragment>
    }
}

export default Appointment;

//now we have to connect to the backend so lets make actions
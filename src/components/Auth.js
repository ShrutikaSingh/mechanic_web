import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {authUser,logout} from '../store/actions';
class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  

   handleChange(e){
       this.setState({[e.target.name]: e.target.value})
   }

   handleSubmit(e){
       const {username, password} =  this.state;
       const{authType} = this.props;
       e.preventDefault();
       console.log(username, password);

       this.props.authUser(authType || 'login' ,{username , password});
   }

    render(){
        const {username,password} =  this.state; //means we dont have to do everytime this.username
         // since we have destructured Fragment so no need of React.Fragment
        return <Fragment>
            <form onSubmit={this.handleSubmit}> 
                <label for="username">UserName </label>
                <input type='text' value={username} name="username" onChange={this.handleChange}/>
                <label for="password">Password</label>
                <input type="password" value={password} name="password" onChange={this.handleChange}/>

                <button type="submit">Submit</button>
            </form>
        </Fragment>
    }
}

export default connect(()=>({}),{authUser,logout})(Auth);
import React,{Component} from 'react';

const copyStyle={
background:'grey',
color:'white',
textAlign:'center'
}
export default class Copyright extends Component{
    render(){
        return(
            <p style={copyStyle} >
                Designed and Developed by Shrutika
            </p>
        )
    }
}
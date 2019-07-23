import React,{Fragment} from 'react';
import {connect} from 'react-redux';

const ErrorMessage= ({error}) => (
<Fragment>{error && <div>{error.message}</div>}</Fragment>
); //arrow function with single line syntax 


export default connect(store => ({error : store.error}))(ErrorMessage);
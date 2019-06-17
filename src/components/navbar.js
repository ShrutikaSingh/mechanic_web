import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ligo from '../logo.jpg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
class NavBar extends Component{
    render(){
        return(
          <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-small-5">
                <Link to='/details'>
                    <img src={ligo} alt="services" className="navbar-brand" height="50px"></img>
                </Link>  

                <h4 color="white">JACK MY MOTOR</h4>
                <ul className='navbar-nav align-items-center'>
                    <li className="nav-item ml-5"> 
                        <Link to='/' className="nav-link"> Home</Link>
                     </li>
                     <li className="nav-item ml-5">
                        <Link to='/about' className="nav-link"> About</Link>
                     </li>
                     <li className="nav-item ml-5">
                        <Link to='/' className="nav-link"> Services</Link>
                     </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className='fas fa-cart-plus' />
                        </span>
                         My Cart
                    </ButtonContainer>
                </Link> 


                <Link to='/login' className="nav-link">
                    <button>
                         Login
                    </button>
                </Link> 
                <Link to='/signup' className="nav-link">
                    <button>
                         Sign Up
                    </button>
                </Link> 
            </nav>
          </React.Fragment>  
        );
    }
}




export default NavBar;
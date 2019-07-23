import React,{Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavLink,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import ligo from '../logo.jpg';
import {ButtonContainer} from './Button';


import Home from '../components/home';
import About from '../components/about/about';
import Register from '../components/register';
import Login from "../components/Auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Users() {
    return <h2>Users</h2>;
  }

  
class AppNavbar extends Component{       
            constructor(props){
                 super(props);
                 this.toggle=this.toggle.bind(this);
                 this.state={
                    isOpen: false
                };
            }
            toggle(){
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }

    render(){
        return(
            <Router>
            <Navbar  color="light" light expand="md">
                <NavLink to='/details'>
                        <img src={ligo} alt="services" className="navbar-brand" height="50px"></img>
                </NavLink> 
                <NavbarBrand href="/">Jack My Motor</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        
                            <ul className='navbar-nav align-items-center'>
                                <li className="nav-item ml-2"> 
                                <Link to='/home' className="nav-link"> Home</Link>
                                 </li>
                                <li>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                        Service Offering
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>
                                            Reapir
                                        </DropdownItem>
                                        <DropdownItem>
                                            Service
                                        </DropdownItem>
                                        <DropdownItem>
                                           Car Towing
                                        </DropdownItem>
                                        <DropdownItem>
                                            Used Car Detailing
                                        </DropdownItem>
                                        <DropdownItem>
                                            Service Packages
                                        </DropdownItem>
                                        <DropdownItem>
                                         Spares & Accessories
                                        </DropdownItem>         
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/book-service' className="nav-link"> Book My Service</Link>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/about/' className="nav-link"> About Us</Link>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/howitworks/' className="nav-link"> How It Works</Link>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/users/' className="nav-link"> Fair Pricing</Link>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/service/' className="nav-link"> Contact</Link>
                                </li>
                                <li className="nav-item ml-2">  
                                    <Link to='/login/' className="nav-link">
                                        <button>Login</button>
                                    </Link> 
                                </li>
                                <li className="nav-item ml-2"> 
                                    <Link to='/register/' className="nav-link">
                                        <button> Sign Up</button>
                                    </Link> 
                                </li>
                                <li className="nav-item ml-2"> 
                                    <Link to='/cart/'>
                                        <ButtonContainer>
                                            <span>
                                            <i className='fas fa-cart-plus' />
                                            </span> Cart
                                        </ButtonContainer>
                                    </Link>
                                </li>
                            </ul>
                            
                        </NavItem>
                    </Nav>
                    
                </Collapse>
            </Navbar>
            <Route path="/home" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/register/" component={Register} />
            <Route path="/login/" component={Login}/>
            </Router>
       
        
            )
        }
}




export default AppNavbar;
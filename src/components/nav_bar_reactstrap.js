import React,{Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavLink,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import ligo from '../logo.jpg';
import {ButtonContainer} from './Button';
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
        <div>
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
                                <NavLink to='/' className="nav-link"> Home</NavLink>
                                 </li>
                                <li>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                        Services
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem  />
                                        <DropdownItem>
                                           Option 3
                                        </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </li>
                                
                                <li className="nav-item ml-2">
                                    <NavLink to='/about' className="nav-link"> About</NavLink>
                                </li>
                                <li className="nav-item ml-2">
                                    <NavLink to='/service' className="nav-link"> Contact</NavLink>
                                </li>
                            
                           
                                <li className="nav-item ml-2">  
                                    <NavLink to='/login' className="nav-link">
                                        <button>Login</button>
                                    </NavLink> 
                                </li>
                                <li className="nav-item ml-2"> 
                                    <NavLink to='/signup' className="nav-link">
                                        <button> Sign Up</button>
                                    </NavLink> 
                                </li>
                                <li className="nav-item ml-2"> 
                                    <NavLink to='/cart'>
                                        <ButtonContainer>
                                            <span>
                                            <i className='fas fa-cart-plus' />
                                            </span> Cart
                                        </ButtonContainer>
                                    </NavLink>
                                </li>
              </ul>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
            )
        }
}




export default AppNavbar;
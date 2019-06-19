import React,{Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavLink,NavItem,Container} from 'reactstrap';


class AppNavbar extends Component{       
            constructor(props){
                 super(props);
                 this.state={
                    isOpen: false
                }
                this.toggle=this.toggle.bind(this);
            }

            toggle=()=>{
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }
        

        render(){
            return(
            <div>
                <Navbar  color="dark" expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Jack My Motor</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar/>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/about">
                                   check
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            )
        }
    }




export default AppNavbar;
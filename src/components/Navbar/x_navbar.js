import React from 'react';
import {

  Navbar,

  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import Xlogo from "./../../images/typeX.png";


export class NavX extends React.Component{
    render(){

        
        return (
    <div className="X_nav">
      <Navbar  color="light" light expand="md">
        <NavbarBrand className="X_text" href="/"><img width="50px" src={Xlogo} alt="logo" />TypeX</NavbarBrand>
     
     
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap"></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Profile</NavLink>
            </NavItem>
          </Nav>
        
      </Navbar>
    </div>
    );
}
}


export default NavX;
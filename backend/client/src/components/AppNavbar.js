import React, { Component } from 'react';

// Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
// Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. 
// Includes support for branding, navigation, and more, including support for our collapse plugin.
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {

    state = {
        isOpen: false
    }
    // arrow function
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen // that means that, if the state is close I want to open, and if the state is open I want to close.
        })
    }

    render() {
        return (
            <div>
            <Navbar color="danger" dark="5099DC" expand="sm" className="mb-2" fontWeight="bold" fontSize="18px">  
                <Container>
                    <NavbarBrand href="/">Moodar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/JVBravoo">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Container>
            </Navbar>
        </div>
        );
        
    }
}



export default AppNavbar;
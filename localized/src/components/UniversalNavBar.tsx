import React from 'react';
import { pages } from "../App";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


interface UniversalNavBarProps {
    changePage: (page: pages) => void;
}

class UniversalNavBar extends React.Component<UniversalNavBarProps> {
    render (){
        return(
            <Navbar variant="dark" bg="dark" expand="lg" className="">
            <Navbar.Brand >Simpler Styling</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link onClick={(e) => this.props.changePage(pages.DesignCivilPage)}>Civil Supporter</Nav.Link>
                <Nav.Link onClick={(e) => this.props.changePage(pages.MyContentPage)}>My Content</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
            </Navbar.Collapse>
          </Navbar> 

        )
    }

}
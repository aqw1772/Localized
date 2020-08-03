import React from 'react';
import { pages } from "../App";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {SearchBar} from "./SearchBar";


interface UniversalNavBarProps {
    changePage: (page: pages) => void;
}

class UniversalNavBar extends React.Component<UniversalNavBarProps> {
    render (){
        return(
            <Navbar variant="dark" bg="primary" expand="lg" className="">
            {/* <Navbar.Brand >Localized</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <SearchBar />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link onClick={(e)=> this.props.changePage(pages.DesignCivilPage) }>Civil Supporter</Nav.Link>
                <Nav.Link onClick={(e)=> this.props.changePage(pages.MyContentPage) }>My Content</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar> 

        )
    };

}
export default UniversalNavBar;
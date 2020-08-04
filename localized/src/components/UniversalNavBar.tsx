import React from 'react';
import { pages } from "../App";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {SearchBar} from "./SearchBar";
import Image from 'react-bootstrap/Image'
import Satya from "../images/Satya.png";


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
                <Image style={{width: 50, height: 'auto'}} src={Satya}/>
                {/* <Navbar.Text>
                  Signed in as: Satya Nadella
                </Navbar.Text> */}

              </Nav>
            </Navbar.Collapse>
          </Navbar> 

        )
    };

}
export default UniversalNavBar;
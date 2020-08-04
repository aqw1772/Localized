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
<<<<<<< HEAD
                <Nav.Link onClick={(e)=> this.props.changePage(pages.DesignCivilPage) } > Civil Supporter </Nav.Link>
                <Nav.Link onClick={(e)=> this.props.changePage(pages.MyContentPage) } > My Content </Nav.Link>
                <Image style={{width: 50, height: 'auto'}} src="data:image/jpeg;base64,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" rounded />
=======
                <Nav.Link onClick={(e)=> this.props.changePage(pages.DesignCivilPage) }>Civil Supporter</Nav.Link>
                <Nav.Link onClick={(e)=> this.props.changePage(pages.MyContentPage) }>My Content</Nav.Link>
                <Image style={{width: 50, height: 'auto'}} src={Satya}/>
                {/* <Navbar.Text>
                  Signed in as: Satya Nadella
                </Navbar.Text> */}
>>>>>>> 0e646a4fd1ab00772f8a5dd82444a0e442bd10c6
              </Nav>
            </Navbar.Collapse>
          </Navbar> 

        )
    };

}
export default UniversalNavBar;
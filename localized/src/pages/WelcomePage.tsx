import React from "react";
import { pages } from "../App";
import logo from "../images/logo.png";
import iPhone_screenshot from "../images/iPhone.png";
import WelcomeNavBar from "../components/WelcomeNavBar";
import WelcomeCarousel from "../components/WelcomeCarousel";


interface WelcomeScreenProps {
  changePage: (page: pages) => void;
}

export class WelcomePage extends React.Component<WelcomeScreenProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="leftColumn"> {/* div for the left side of the page*/}
          <img className="logo" src={logo}></img>
          {/* Carousel component goes here */}
          <WelcomeCarousel/>
        </div>
        <div className="rightColumn"> {/* div for the right side of the page*/}
          {/* Navbar component goes here */}
          <WelcomeNavBar changePage={this.props.changePage}/>
          <img id="" src={iPhone_screenshot}></img>
          {/* Click on the iPhone to advance to the next page (haven't made the sign-up button yet) */}
        </div>
        <div className="footer">
          <p>&copy; New Technologists 2020 - Team 13</p>
        </div>
      </div>
    );
  }
}
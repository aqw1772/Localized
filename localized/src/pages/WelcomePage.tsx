import React from "react";
import { pages } from "../App";
import logo from "../images/logo.png";
import iPhone_screenshot from "../images/iPhone.png";

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
        </div>
        <div className="rightColumn"> {/* div for the right side of the page*/}
          {/* Navbar component goes here */}
          <div>
          <button className="App-link" onClick={(e) => this.props.changePage(pages.BubblePage)}>
            Welcome Page
          </button>

          <button className="App-link" onClick={(e) => this.props.changePage(pages.SignUpPage)}>
            Sign Up
          </button>
    </div>
          <img src={iPhone_screenshot} onClick={(e) => this.props.changePage(pages.BubblePage)}></img>
          {/* Click on the iPhone to advance to the next page (haven't made the sign-up button yet) */}
        </div>
      </div>
    );
  }
}
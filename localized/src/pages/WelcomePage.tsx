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
      <div className="welcome">
        <img className="logo" src={logo}></img>
          <button className="App-link" onClick={(e) => this.props.changePage(pages.BubblePage)}>
            Welcome Page
          </button>
        <img src={iPhone_screenshot}></img>
      </div>
    );
  }
}
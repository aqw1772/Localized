import React from "react";
import { pages } from "./App";

interface SignupScreenProps {
  changePage: (page: pages) => void;
}

export class SignupPage extends React.Component<SignupScreenProps> {
  render() {
    return (
      <div>
        <h1>Click on Join or Sign-in</h1>
        <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Join
        </p>
        <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Sign-in
        </p>
      </div>
    );
  }
}

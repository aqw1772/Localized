import React from "react";
import { pages } from "./App";

interface WelcomeScreenProps {
  changePage: (page: pages) => void;
}

export class WelcomePage extends React.Component<WelcomeScreenProps> {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
        </p>
        <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Community
        </p>
      </div>
    );
  }
}

import React from "react";
import { pages } from "../App";

interface WelcomeScreenProps {
  changePage: (page: pages) => void;
}

export class WelcomePage extends React.Component<WelcomeScreenProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
          <button className="App-link" onClick={(e) => this.props.changePage(pages.BubblePage)}>
            Welcome Page
          </button>
    </div>
    );
  }
}
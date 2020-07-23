import React from "react";
import { pages } from "../App";

interface BubbleScreenProps {
  changePage: (page: pages) => void;
}

export class BubblePage extends React.Component<BubbleScreenProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <p className="App-link" onClick={(e) => this.props.changePage(pages.DesignCivilPage)}>
            Bubble UI Page
          </p>
    </div>
    );
  }
}
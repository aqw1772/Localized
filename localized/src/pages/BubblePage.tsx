import React from "react";
import { pages } from "../App";
import BubbleList from "../components/BubbleList";

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
          <button className="App-link" onClick={(e) => this.props.changePage(pages.DesignCivilPage)}>
            Bubble UI Page
          </button>
          <BubbleList />
    </div>
    );
  }
}
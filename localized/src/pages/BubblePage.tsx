import React from "react";
import { pages } from "../App";
import BubbleList from "../components/BubbleList";
import '../components/Bubble.css';

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
          <p>Tell us what you're interested in!</p>
          <br></br>
          <p>Tap once to add to your personalized library and tap again to remove</p>
          <button className="App-link" onClick={(e) => this.props.changePage(pages.DesignCivilPage)}>
            Next
          </button>
          <BubbleList />
    </div>
    );
  }
}
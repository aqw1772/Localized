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
      <div>
          <p>Tell us what you're interested in!</p>
          <br></br>
          <p>Tap once to add to your personalized library and tap again to remove</p> 
          <br></br>
          <button className="App-link nextBtn" onClick={(e) => this.props.changePage(pages.DesignCivilPage)}>
            Next
          </button>
          <BubbleList />
    </div>
    );
  }
}
import React from "react";
import { pages } from "../App";
import BubbleList from "../components/BubbleList";
import '../components/Bubble.css';
import UniversalNavBar from "../components/UniversalNavBar";

//page for bubble selection

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
        <UniversalNavBar changePage={this.props.changePage}/>
          <br></br>
          <br></br>
          <br></br>
          <p className="BubblePageText">Tell us what you're interested in!</p>
          <p className="BubblePageText">Tap once to add to your personalized library and tap again to remove</p> 
          <br></br>
          <button className="App-link nextBtn" onClick={(e) => this.props.changePage(pages.DesignCivilPage)}>
            Next
          </button>
          <BubbleList />
    </div>
    );
  }
}
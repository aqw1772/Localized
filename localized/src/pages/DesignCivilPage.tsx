import React from "react";
import { pages } from "../App";

interface DesignCivilScreenProps {
  changePage: (page: pages) => void;
 // myurl: URL
}

export class DesignCivilPage extends React.Component<DesignCivilScreenProps> {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <button className="App-link" onClick={(e) => this.props.changePage(pages.MyContentPage)}>
          Design Civil Supporter Page
          </button>
          <p> Select your method Prefered Method of Contact</p>
          <button className ="contact" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}>Facebook</button>
          <button className ="contact" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}> Text Message</button>
          <button className ="contact" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}>Email</button>
          <p>Select your prefered topic of interests</p>
    </div>
    );
  }
}

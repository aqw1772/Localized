import React from "react";
import { pages } from "../App";

interface DesignCivilScreenProps {
  changePage: (page: pages) => void;
}

export class DesignCivilPage extends React.Component<DesignCivilScreenProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <p className="App-link" onClick={(e) => this.props.changePage(pages.MyContentPage)}>
          Design Civil Supporter Page
          </p>
    </div>
    );
  }
}

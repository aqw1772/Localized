import React from "react";
import { pages } from "../App";
import { createDecipher } from "crypto";

interface MyContentScreenProps {
  changePage: (page: pages) => void;
}

export class MyContentPage extends React.Component<MyContentScreenProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <button className="App-link" onClick={(e) => this.props.changePage(pages.EditCivilPage)}>
            My Content Page
          </button>

        
    </div>
    );
  }
}

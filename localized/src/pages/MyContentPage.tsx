import React from "react";
import { pages } from "../App";

interface MyContentScreenProps {
  changePage: (page: pages) => void;
}

class MyContentPage extends React.Component<MyContentScreenProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <p className="App-link" onClick={(e) => this.props.changePage(pages.EditCivilPage)}>
            My Content Page
          </p>
    </div>
    );
  }
}

export default MyContentPage;
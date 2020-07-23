import React from "react";
import { pages } from "../App";

interface EditCivilScreenProps {
  changePage: (page: pages) => void;
}

export class EditCivilPage extends React.Component<EditCivilScreenProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <button className="App-link" onClick={(e) => this.props.changePage(pages.WelcomePage)}>
            Edit Civil Supporter Page
          </button>
    </div>
    );
  }
}
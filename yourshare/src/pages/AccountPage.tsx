import React from "react";
import { pages } from "../App";

interface AccountScreenProps {
  changePage: (page: pages) => void;
}

export class AccountPage extends React.Component<AccountScreenProps> {
  render() {
    return (
      <div>
        <h1>YourShare Account</h1>
        <button onClick={(e) => this.props.changePage(pages.BrowsePage)}>
          Join Hello
        </button>
        <p className="App-link" onClick={(e) => this.props.changePage(pages.BrowsePage)}>
          Sign-in
        </p>
      </div>
    );
  }
}

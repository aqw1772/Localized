import React from "react";
import { pages } from "../App";

interface AccountScreenProps {
  changePage: (page: pages) => void;
}

export class AccountPage extends React.Component<AccountScreenProps> {
  render() {
    return (
      <div>
        <div>
          <h1>YourShare</h1>
        </div>

        <div>
          <h1>Join your community</h1>
          <h2>Sign-up</h2>
          <form>
            <input type="text" placeholder="Username:"/>
            <input type="text" placeholder="Phone number:"/>
            <input type="text" placeholder="Zip code:"/>

            {/* <input type="submit" /> */}
            <button onClick={(e) => this.props.changePage(pages.BrowsePage)}>
              Join
            </button>
          </form>
        </div>
        <p className="App-link" onClick={(e) => this.props.changePage(pages.BrowsePage)}>
          Sign-in
        </p>
      </div>
    );
  }
}

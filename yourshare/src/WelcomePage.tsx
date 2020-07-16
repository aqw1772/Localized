import React from "react";
import { pages } from "./App";
import ItemList from "./components/ItemList/ItemList"

interface WelcomeScreenProps {
  changePage: (page: pages) => void;
}

export class WelcomePage extends React.Component<WelcomeScreenProps> {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <ItemList />
        <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
        </p>
        <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Community
        </p>
      </div>
    );
  }
}

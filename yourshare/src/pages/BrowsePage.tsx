import React from "react";
import { pages } from "../App";

interface BrowseScreenProps {
  changePage: (page: pages) => void;
}

export class BrowsePage extends React.Component<BrowseScreenProps> {
  render() {
    return (
      <div>
        <h1>YourShare Browse</h1>
        <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
        </p>
        <p onClick={(e) => this.props.changePage(pages.BorrowItemPage)}>
          Borrow item
        </p>
        <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Community
        </p>
      </div>
    );
  }
}

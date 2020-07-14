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
        <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Community
        </p>
        <div>
        {/* first table */}
        <table style="width:150%" >
          <tr>
            <th>Items for borrowing</th>
            <th>Lender</th>
          </tr>
          {/* second table on right */}
          <tr>
            <th>Your items</th>
            <th>Lent to</th>
          </tr>
        </table>


      </div>
      </div>
     
    )
  }
}

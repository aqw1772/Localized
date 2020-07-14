import React from "react";
import { pages } from "../App";

interface BrowseScreenProps {
  changePage: (page: pages) => void;
}

export class BrowsePage extends React.Component<BrowseScreenProps> {
  render() {
    return (
    <div>
        <h1>Welcome, [username]!</h1>
        <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
        </p>
        <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Manage Community
        </p>
        <div>
        {/* first table */}
        <table style="width:150%" >
          <tr>
            <th>Items for borrowing</th>
            <th>Lender</th>
          </tr>
            <tr>`
              <td>Blender</td>
              <td>Stacey</td>
            </tr>
            <tr>
              <td>Rake</td>
              <td>Marcos</td>
            </tr>
            <tr>
              <td>Car</td>
              <td>Marcos</td>
            </tr>
            <tr>
              <td>Bike</td>
              <td>Cam</td>
            </tr>
            <tr>
              <td>Drill</td>
              <td>Stacey</td>
            </tr>
            <tr>
              <td>Ladder</td>
              <td>Marcos</td>
            </tr>
            <tr>
              <td>Kayak</td>
              <td>Cam</td>
            </tr>
            <tr>
              <td>The Office DVD Box set</td>
              <td>Stacey</td>
            </tr>
            <tr>
              <td>Cart</td>
              <td>Jim</td>
            </tr>
          {/* second table on right */}
          <tr>
            <th>Your items</th>
            <th>Lent to</th>
          </tr>
          {/* <tr> */}
              {/* <td>Add your first item</td> */}
              {/* <td>A friend</td> */}
            {/* </tr> */}
        </table>
      
      </div>
      </div>
     
    )
  }
}

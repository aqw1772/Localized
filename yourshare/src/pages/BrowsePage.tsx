import React from "react";
import { pages } from "../App";

interface BrowseScreenProps {
  changePage: (page: pages) => void;
}

export class BrowsePage extends React.Component<BrowseScreenProps> {
  render() {
    return (
    <div className="wrapper">
      <div>
          <h1>Welcome, [username]!</h1>
          {/* first table */}
          <table>
            <tr>
              <th>Items for borrowing</th>
              <th>Lender</th>
            </tr>
              <tr onClick={(e) => this.props.changePage(pages.BorrowItemPage)}>
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
            
          </table>
        </div>
        <div> {/* second table on right */}
          <table>
          <tr>
              <th>Your items</th>
              <th>Lent to</th>
            </tr>
            <tr>
                <td>Add your first item</td>
                <td>A friend</td>
            </tr>
          </table>
          <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
            Add item
          </p>
          {/* <p onClick={(e) => this.props.changePage(pages.BorrowItemPage)}>
            
          </p> */}
          <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
            Manage Community
          </p>
        </div>
        <div>


      </div>
    </div>
     
    )
  }
}

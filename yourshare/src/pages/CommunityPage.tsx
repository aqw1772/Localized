import React from "react";
import { pages } from "../App";

interface CommunityScreenProps {
  changePage: (page: pages) => void;
}

export class CommunityPage extends React.Component<CommunityScreenProps> {
  render() {
    return (
      <div>
        <p className="App-link" onClick={(e) => this.props.changePage(pages.BrowsePage)}>
         Back to browse
        </p>
        <h1>YourShare Manage Community</h1>
        <table>
          <tr>
            <th>Friends</th>
            <th>Item currently borrowed</th>
            <th>Item currently lent</th>
            <th>Best friend</th>
          </tr>
          <tr>
            <td>Stacey</td>
            <td>None</td>
            <td>None</td>
            <td><input type="checkbox"></input></td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>None</td>
            <td>None</td>
            <td><input type="checkbox"></input></td>
          </tr>
        </table>
      </div>
    );
  }
}
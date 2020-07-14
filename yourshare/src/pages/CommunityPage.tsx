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
        <i class='far fa-arrow-alt-circle-left' style='font-size:36px'></i> Back to browse
        </p>
        <h1>YourShare Manage Community</h1>
        
      </div>
    );
  }
}
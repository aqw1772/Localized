import React from "react";
import { pages } from "../App";

interface BorrowItemScreenProps {
  changePage: (page: pages) => void;
}

export class BorrowItemPage extends React.Component<BorrowItemScreenProps> {
  render() {
    return (
      <div>
        <h1>YourShare Borrow Item</h1>
      </div>
    );
  }
}
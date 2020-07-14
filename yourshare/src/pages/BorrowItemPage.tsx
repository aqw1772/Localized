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

        <form action="">
            <input type = "text" name ="name" placeholder="Item name: Blender"/>
            <input type = "text" name ="name" placeholder="Type: Kitchen"/>
            <input type = "text" name ="name" placeholder="Lender: Stacey"/>
            <textarea>A pretty great Blender. The lid is a little loose so make
                 sure to hold it down when using to avoid asmoothie disaster
            </textarea>

        </form>

      </div>

    //form 
  



    );
  }
}
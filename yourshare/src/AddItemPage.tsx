import React from "react";
import { pages } from "./App";

interface AddItemScreenProps {
  changePage: (page: pages) => void;
}

export class AddItemPage extends React.Component<AddItemScreenProps> {

  nameRef: React.RefObject<HTMLInputElement>;
  typeRef: React.RefObject<HTMLInputElement>;
  descriptionRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.nameRef = React.createRef();
    this.typeRef = React.createRef();
    this.descriptionRef = React.createRef();
  }

  render() {
    return (
      <div>
        <h1>Add item</h1>
        <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Back To Welcome
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" ref={this.nameRef} />
          </label>
          <label>
            Type:
          <input type="text" ref={this.typeRef} />
          </label>
          <label>
            Description:
          <input type="text" ref={this.descriptionRef} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.nameRef.current == null || this.typeRef.current == null || this.descriptionRef.current == null)
      alert('INTERNAL ERROR: missing reference!');
    else
      alert('A name was submitted: ' + this.nameRef.current.value + ' type: ' + this.typeRef.current.value + ' Desc: ' + this.descriptionRef.current.value);

  }
}

import React from "react";
import { pages } from "./App";
import { addItem } from "./redux/actions"
import { IYourShareState } from './redux/types';
import { connect } from 'react-redux';

interface AddItemScreenProps {
  changePage: (page: pages) => void;
  addItem: (n: string, t: string, d: string) => void;
}

class AddItemPage extends React.Component<AddItemScreenProps> {

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
    if (this.nameRef.current == null || this.typeRef.current == null || this.descriptionRef.current == null) {
      alert('INTERNAL ERROR: missing reference!');
      return;
    }
    this.props.addItem(this.nameRef.current.value, this.typeRef.current.value, this.descriptionRef.current.value);
  }
}

// Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. It return an object containing the store data you
// want to transmit as props to a component
// Here an object containing countValue is transmitted
function mapStateToProps(state: IYourShareState) {
  return {
    // no data props
  }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
  return {
    addItem: (n: string, t: string, d: string) => dispatch(addItem(n, t, d))
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemPage);


export default connectedComponent;

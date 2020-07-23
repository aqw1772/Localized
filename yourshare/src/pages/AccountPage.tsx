import React from "react";
import { pages } from "../App";
import ReactImage from "../Spin";
import { useSpring, animated } from 'react-spring';
import YS_icon from "./YS_icon.png";

import { joinInfo } from "../redux/actions";
import { IYourShareState } from '../redux/types';
import { connect } from 'react-redux';

interface AccountScreenProps {
  changePage: (page: pages) => void;
  saveJoinInfo: (n: string, t: string, d: string) => void;
}

class AccountPage extends React.Component<AccountScreenProps> {

  nameRef: React.RefObject<HTMLInputElement>;
  phoneNumRef: React.RefObject<HTMLInputElement>;
  zipCodeRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.nameRef = React.createRef();
    this.phoneNumRef = React.createRef();
    this.zipCodeRef = React.createRef();
  }

  render() {
    return (
      <div className="wrapper">
        <div>
            <h1>YourShare</h1>
            <img src={YS_icon} alt="" className="animate__rotateIn"></img>
          </div>

          {/*Second div represents right side of page*/}
          <div>
            <h1>Join your community</h1>
            <h2>Sign-up</h2>

            {/*User input form*/}
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.nameRef} placeholder="Username:" />
                <br/>
                <input type="text" ref={this.phoneNumRef} placeholder="Phone number:" />
                <br/>
                <input type="text" ref={this.zipCodeRef} placeholder="Zip code: "/>
                <br/>
                <button className="join"> Join </button>
            </form>
            
          <p className="App-link" onClick={(e) => this.props.changePage(pages.BrowsePage)}>
            Sign-in
          </p>
        </div>
      </div>
    );
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.nameRef.current == null || this.phoneNumRef.current == null || this.zipCodeRef.current == null) {
      alert('INTERNAL ERROR: missing reference!');
      return;
    }
    this.props.saveJoinInfo(this.nameRef.current.value, this.phoneNumRef.current.value, this.zipCodeRef.current.value);
    this.props.changePage(pages.BrowsePage)
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
    saveJoinInfo: (n: string, p: string, z: string) => dispatch(joinInfo(n, p, z))
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);

export { connectedComponent as AccountPage }


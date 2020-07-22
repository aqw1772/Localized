import React from "react"
import { pages } from "../App";
import ReactImage from "../Spin";
import { useSpring, animated } from 'react-spring';
import YS_icon from "./YS_icon.png";

import { joinInfo } from "../redux/actions"
import { IYourShareState } from '../redux/types';
import { connect } from 'react-redux';


interface AccountScreenProps {
  changePage: (page: pages) => void;
  saveJoinInfo: (n: string, t: string, d: string) => void;
}

<<<<<<< HEAD
const AccountPage = (props:AccountScreenProps) => {
  return (
    <div className="wrapper">
        <div className="animate__rotateIn">
          <h1>YourShare</h1>
          <img src={YS_icon} alt=""></img>
        </div>

        {/*Second div represents right side of page*/}
        <div className="account">
          <h1>Join your community</h1>
          <h2>Sign-up</h2>
          {/*User input form*/}
          <form>
            <input type="text" placeholder="Username:"/>
            <br/>
            <input type="text" placeholder="Phone number:"/>
            <br/>
            <input type="text" placeholder="Zip code:"/>
            <br/>
            <button onClick={(e) => props.changePage(pages.BrowsePage)}>
              Join
            </button>
          </form>
        </div>
      <div className="App-link" onClick={(e) => props.changePage(pages.BrowsePage)}>
        Sign-in
      </div>
    </div>
  );
 
}

export default AccountPage;
=======
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
      <div>
        <div>
          {/*First div represents left side of page*/}
          <div>
            <h1>YourShare</h1>
          </div>
          <div className="animate__rotateIn">
            <img src={YS_icon} alt=""></img>
          </div>

          {/*Second div represents right side of page*/}
          <div>
            <h1>Join your community</h1>
            <h2>Sign-up</h2>

            {/*User input form*/}
            <form onSubmit={this.handleSubmit}>
              <p>
                <label>
                  Name:
          <input type="text" ref={this.nameRef} />
                </label>
              </p>
              <p>
                <label>
                  Phone number:
          <input type="text" ref={this.phoneNumRef} />
                </label>
              </p>
              <p>
                <label>
                  Zip code:
          <input type="text" ref={this.zipCodeRef} />
                </label>
              </p>
              <p>
                <input type="submit" value="Join" />
              </p>
            </form>
          </div>
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

>>>>>>> 38651b7bb1f508308a23786f2d8293a782882268

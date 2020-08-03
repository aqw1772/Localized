import React from "react";
import { pages } from "../App";
import Button from 'react-bootstrap/Button';
import lc from '../images/lc.png';


interface SignUpScreenProps {
  changePage: (page: pages) => void;
}

export class SignUpPage extends React.Component<SignUpScreenProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={(e) => this.props.changePage(pages.WelcomePage)} className="back"> Back </Button>{' '}

        {/* side nav bar containing image/welcome text */}
        <div className="sidenav">
          <h1 className="title">Localized</h1>
          <img src={lc} alt="" className="lc"/>
          <h3>information right at the tips of your finger</h3>
        </div>

        {/* sign up form */}
        <div className="wrap">
          <div className="form-wrapper">
          <form>
            <h4 className="createAccount">Sign up to create a new account</h4>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input placeholder="First Name" type="text" name="firstName" required/>
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input placeholder="Last Name" type="text" name="lastName" required/>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input  placeholder="Email" type="email" name="email"required />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input placeholder="Password" type="password" name="password" required />
            </div>
            <div className="password">
              <label htmlFor="password">Confirm Password</label>
              <input placeholder="Confirm Password" type="password" name="password" required/>
            </div>
            <div className="createAccount">
              <button type="submit" onClick={(e) => this.props.changePage(pages.BubblePage)}>Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
        <div className="footer">
          <p>&copy; New Technologists 2020 - Team 13</p>
        </div>
      </div>
    );
  }
}
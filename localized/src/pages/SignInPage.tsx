import React from "react";
import { pages } from "../App";
import Button from 'react-bootstrap/Button';
import lc from '../images/lc.png';


interface SignInScreenProps {
  changePage: (page: pages) => void;
}

export class SignInPage extends React.Component<SignInScreenProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={(e) => this.props.changePage(pages.WelcomePage)} className="back"> Back </Button>{' '}

        {/* side nav bar containing image/welcome text */}
        <div className="sidenav">
          <img src={lc} alt="" className="lc"/>
          <h5 className="title">information at your fingertips...</h5>
        </div>

        {/* sign up form */}
        <div className="wrap">
          <div className="form-wrapper">
          <form>
            <h4 className="createAccount">Welcome Back</h4>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input  placeholder="Email" type="email" name="email"required />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input placeholder="Password" type="password" name="password" required />
            </div>
            <div className="createAccount">
              <button type="submit" onClick={(e) => this.props.changePage(pages.MyContentPage)}>Sign In</button>
              <small onClick={(e) => this.props.changePage(pages.SignUpPage)}>Don't have an account yet?</small>
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
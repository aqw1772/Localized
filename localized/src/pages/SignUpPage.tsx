import React from "react";
import { pages } from "../App";


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
          <button className="App-link" onClick={(e) => this.props.changePage(pages.WelcomePage)}>
            Welcome page
          </button>

          <h1>Welcome to Localized</h1>
          <h4>Sign up to create a new account</h4>

          <form action="">
              <input type="text" placeholder="first name" required/>
               <input type="text" placeholder="last name" required/>
               <br/>
              <input type="email" placeholder="email" required/>
              <br/>
              <input type="password" placeholder="password" required/>
              <br/>
              <input type="password" placeholder="confirm password" required/>
              <br/>
              <button onClick={(e) => this.props.changePage(pages.BubblePage)}>Sign Up</button>
          </form>
         
    </div>
    );
  }
}
import React from "react";
import "./App.css";
import  { WelcomePage } from './pages/WelcomePage';
import  { BubblePage } from './pages/BubblePage';
import  { DesignCivilPage } from './pages/DesignCivilPage';
import  { MyContentPage } from './pages/MyContentPage';
import  { EditCivilPage } from './pages/EditCivilPage';
import  { SignUpPage }  from './pages/SignUpPage';
import  { SignInPage } from './pages/SignInPage';


export enum pages {
  WelcomePage,
  BubblePage,
  DesignCivilPage,
  MyContentPage,
  EditCivilPage,
  SignUpPage,
  SignInPage
}

interface AppState {
  currentPage: pages;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: pages.WelcomePage};
  }
  render() {
    return <div className="App">{this.getCurrentScreen()}</div>;
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.WelcomePage:
        return <WelcomePage changePage={this.changeScreen} />;
      case pages.BubblePage:
        return <BubblePage changePage={this.changeScreen} />;
      case pages.DesignCivilPage:
        return <DesignCivilPage changePage={this.changeScreen} />;
      case pages.MyContentPage:
        return <MyContentPage changePage={this.changeScreen} />;
      case pages.EditCivilPage:
        return <EditCivilPage changePage={this.changeScreen} />;
      case pages.SignUpPage:
        return <SignUpPage changePage={this.changeScreen}/>;
      case pages.SignInPage:
        return <SignInPage changePage={this.changeScreen}/>;
      default:
        return <WelcomePage changePage={this.changeScreen} />;
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage
    }));
  };
}

export default App;

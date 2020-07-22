import React from "react";
import "./App.css";
import  AccountPage  from "./pages/AccountPage";
import { BrowsePage } from "./pages/BrowsePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BorrowItemPage } from "./pages/BorrowItemPage";

export enum pages {
  AccountPage,
  BrowsePage,
  CommunityPage,
  BorrowItemPage,
  AddItemPage
}

interface AppState {
  currentPage: pages;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { currentPage: pages.AccountPage };
  }
  render() {
    return <div className="App">{this.getCurrentScreen()}</div>;
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.AccountPage:
        return <AccountPage changePage={this.changeScreen} />;
      case pages.BrowsePage:
        return <BrowsePage changePage={this.changeScreen} />;
      case pages.CommunityPage:
        return <CommunityPage changePage={this.changeScreen} />;
      case pages.AddItemPage:
        return <AddItemPage changePage={this.changeScreen} />;
      case pages.BorrowItemPage:
          return <BorrowItemPage changePage={this.changeScreen} />;
      default:
        return <AccountPage changePage={this.changeScreen} />;
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage
    }));
  };
}

export default App;



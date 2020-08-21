import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/cards/Cards";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats">
            <Header />
          </Route>
          <Route path="/main">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/">
            <div className="loginPage">
              <Login />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

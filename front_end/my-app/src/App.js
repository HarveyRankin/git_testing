import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"; 
import TinderCards from './components/cards/Cards';
import SwipeButtons from './components/swipeButtons/SwipeButtons';



function App() {
  return (
    <div className="App">
   
      <Router>
      <Header/>
     {/*header*/}
          <Switch>
            <Route path="/chats">
             
            </Route>
            <Route path="/">
              <TinderCards/>
              <SwipeButtons/>
           </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;



  
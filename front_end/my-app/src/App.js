import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"; 
import TinderCards from './components/cards/Cards';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
     {/*header*/}
          <Switch>
            <Route path="/chat">
              <h1>
                Chatpage
              </h1>
            </Route>
            <Route path="/">
              <TinderCards/>
           </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;



  
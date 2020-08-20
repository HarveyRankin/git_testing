import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"; 


function App() {
  return (
    <div className="App">

      <Router>
     {/*header*/}
     <Switch>
     <Route path="/chat">
      <h1>
        I am the chat page
      </h1>
    </Route>
    <Route path="/">
  <Header/>
    </Route>
    
     </Switch>
    
  

      </Router>

    </div>
  );
}

export default App;



/* var firebaseConfig = {
    apiKey: "AIzaSyDmr84Vt6-zOkCXwEAqU7c0XFGw1C35adE",
    authDomain: "fake-tinder-53802.firebaseapp.com",
    databaseURL: "https://fake-tinder-53802.firebaseio.com",
    projectId: "fake-tinder-53802",
    storageBucket: "fake-tinder-53802.appspot.com",
    messagingSenderId: "245585981759",
    appId: "1:245585981759:web:d7de520041f50784aa238a",
    measurementId: "G-6S89YFEV2G"
  };
*/
   {/*Tinder cards*/}
     {/*buttons below tinder cards*/}


     {/* chat screen (route)*/}
     {/* individual chat screen*/}
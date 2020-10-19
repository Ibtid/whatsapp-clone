import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path ="/rooms/:roomId" exact>
              <Chat/>
            </Route>
            <Route to = "/" exact>
              <h1>asa</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

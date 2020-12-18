import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { MapView } from './components/MapView';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/map' component={ MapView } />
          <Route exact path='/' component={ Home } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

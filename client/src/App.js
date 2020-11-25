import React from 'react';
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Location from './pages/location';
import About from './pages/about';
import Menu from './pages/menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/locations" component={Location} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} /> 
      </Switch>
    </Router>
  );
}

export default App;

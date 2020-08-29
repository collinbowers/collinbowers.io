import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Projects from './components/Projects';
import Error from './components/Error';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router> 
    )}
}

export default App;

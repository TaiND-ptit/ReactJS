import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';
import Home from './Home';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Footer';
// import RouterDemo from './RouterDemo';


class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tin' component={News} />
          <Route exact path='/tin-chi-tiet/:slug.:id.html' component={NewsDetail} />
          <Route exact path='/lien-he' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './containers/home';
import CompletePage from './containers/complete';
import IncompletePage from './containers/incomplete';


function App() {
  return (
      <Router>
        <NavBar />
        <Route path="/" exact component={(HomePage)} />
        <Route path="/complete" component={(CompletePage)} />
        <Route path="/incomplete" component={(IncompletePage)} />
       
      </Router>
  );
}

export default App;

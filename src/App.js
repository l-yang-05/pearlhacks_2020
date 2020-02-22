import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
    <Navigation />
    <Router>
      <Route exact path="/" component={Home}/>
    </Router>
    </>
  );
}

export default App;

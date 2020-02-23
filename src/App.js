import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Survey from './Components/Survey';

function App() {
  return (
    <>
    <Navigation />
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/survey" component={Survey} />
    </Router>
    </>
  );
}

export default App;

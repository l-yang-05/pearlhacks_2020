import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;

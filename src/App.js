import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/dashboard" component={}/> */}
      </Router>
    </>
  );
}

export default App;

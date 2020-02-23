import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Survey from './Components/Survey';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Account from './Components/Account';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/survey" component={Survey} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/account" component={Account} />
      </Router>
      <Footer />
    </>
  );
}

export default App;

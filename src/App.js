import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Navigation from './Components/Navigation';
import Survey from './Components/Survey';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/survey" component={Survey} />
      </Router>
      <Footer />
    </>
  );
}

export default App;

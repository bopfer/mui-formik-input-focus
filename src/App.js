import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import TestForm from './TestForm';

const App = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <BrowserRouter>
        <Header toggleNav={toggleNav} />
        <Nav isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <div style={{ padding: `35px` }}>
          <Route path="/" exact component={Home} />
          <Route path="/test-form" component={TestForm} />
        </div>
      </BrowserRouter>
    </div>
  );
};

const Home = () => (
  <div>
    Home
  <div>
    <Link to="/test-form">
      Go To Form
    </Link>
  </div>
    </div>
);

export default App;

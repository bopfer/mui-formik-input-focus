import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Header } from './Header';
import { Nav } from './Nav';
import { PlainForm } from './PlainForm';
import { FormikHooks } from './FormikHooks';
import { FormikRenderProp } from './FormikRenderProp';

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
          <Route path="/plain-form" component={PlainForm} />
          <Route path="/formik-hooks-form" component={FormikHooks} />
          <Route path="/formik-render-prop-form" component={FormikRenderProp} />
        </div>
      </BrowserRouter>
    </div>
  );
};

const Home = () => (
  <div>
    <h4>Home</h4>
    <ul>
      <li>
        <Link to="/plain-form">Go To the Plain Form </Link>
      </li>
      <li>
        <Link to="/formik-hooks-form">Go To the Formik Hooks Form </Link>
      </li>
      <li>
        <Link to="/formik-render-prop-form">Go To the Formik Render Prop Form </Link>
      </li>
    </ul>
  </div>
);

export default App;

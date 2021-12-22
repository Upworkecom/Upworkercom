import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
// import SignUp from './pages/SignUp';
import Amazon from './pages/Amazon';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          {/* <Route path='/sign-up' component={SignUp} /> */}
          <Route path='/amazon' component={Amazon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Concentration from './pages/Concentration';
import Nav from './components/Nav';
import Header from './components/Header';

const App = () => (
  <Router>
    <React.Fragment>
      <Nav />
      <Header />
      <Switch>
        <Route exact path='/' component={Concentration} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
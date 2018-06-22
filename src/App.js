import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Concentration from './pages/Concentration';

const App = () => (
  // <Router>
  //   <React.Fragment>
  //     <Switch>
  //       <Route exact path='/' component={Concentration} />
  //       {/* <Route component={NoMatch} /> */}
  //     </Switch>
  //   </React.Fragment>
  // </Router>

  <Concentration />
);

export default App;
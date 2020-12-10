import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Book1 from '../Pages/Book1';
import Fishbowl from '../Pages/Fishbowl';
import Ricecooker from '../Pages/Ricecooker';
import Main from '../Pages/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Book1" component={Book1} />
          <Route exact path="/Fishbowl" component={Fishbowl} />
          <Route exact path="/Ricecooker" component={Ricecooker} />
        </Switch>
      </Router>
    )
  }
}
   

   
export default Routes;

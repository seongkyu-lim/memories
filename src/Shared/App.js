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

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/Book1" component={Book1} />
          <Route path="/Fishbowl" component={Fishbowl} />
          <Route path="/Ricecooker" component={Ricecooker} />
        </Switch>
      </Router>
    )
  }
}
   

   
export default App;

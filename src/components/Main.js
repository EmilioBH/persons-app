import React from 'react';
import { PersonProvider } from '../context/PersonContext';
import Person from './Person';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Main = () => (
  <Router>
    <div className="main-layout">
      <Switch>
        <Route path="/">
          <PersonProvider>
            <Person />
          </PersonProvider>
        </Route>
      </Switch>
    </div>
  </Router>
  
)

export default Main;
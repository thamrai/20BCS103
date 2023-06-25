import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        <Route exact path="/train/:id" component={SingleTrain} />
      </Switch>
    </Router>
  );
};

export default App;

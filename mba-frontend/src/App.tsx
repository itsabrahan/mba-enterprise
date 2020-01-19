import React from 'react';
import './App.scss';
import Header from './Layout/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import About from './About/About';


const App: React.FC = () => {
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/About' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './Layout/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Contact from './Contact/Contact';


const App: React.FC = () => {
  return (
    <div className="App">
     <Router>
      <Header />
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

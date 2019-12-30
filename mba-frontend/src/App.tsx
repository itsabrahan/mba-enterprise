import React from 'react';
import './App.scss';
import Header from './layout/header/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-header">        
        <p>
          Body goes here 
        </p>
        
      </div>
    </div>
  );
}

export default App;

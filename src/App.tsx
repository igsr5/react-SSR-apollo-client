import React from 'react';
import Home from './Home';
import { Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/home">
        <Home name="Sammy"></Home>
      </Route>
    </div>
  );
};

export default App;

import React from 'react';
import Home from './Home';
import { Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';

interface AppProps {
  client: ApolloClient<NormalizedCacheObject>
}

const App: React.FC<AppProps> = (props) => {
  return (
    <ApolloProvider client={props.client}>
      <div className="App">
        <Route path="/home">
          <Home name="Sammy"></Home>
        </Route>
      </div>
    </ApolloProvider>
  );
};

export default App;

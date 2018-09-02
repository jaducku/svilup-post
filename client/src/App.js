import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'; 
import {ApolloProvider} from 'react-apollo';

// components
import '../node_modules/grommet/grommet.min.css';
import MainPage from './component/MainPage';
const config  = require('./config/config.json');


// apollo client setup
  
console.log(config.uri);
const client = new ApolloClient({
  uri:config.uri
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="Main">
          <MainPage/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

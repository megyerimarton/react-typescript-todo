import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import { Provider } from 'react-redux'

import store from './store';
import Header from './components/Header';
import List from './components/List';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <List />
    </div>
  </Provider>
);

export default App;

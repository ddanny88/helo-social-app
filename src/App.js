import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav />
          { routes }
        </div>
      </Provider>
    );
  }
}

export default App;

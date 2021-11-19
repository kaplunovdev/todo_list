import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {rootReducer} from './redux/rootReducer'

import {createStore} from 'redux'

import App from './components/App';
//import { composeWithDevTools } from 'redux-devtools-extension'
import './css/style.css';

export const store = createStore(rootReducer)
  





//store.dispatch({ type: 'INIT_APPLICATION' })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



if (module.hot) {
  module.hot.accept();
}


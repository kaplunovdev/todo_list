import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todos from './redux/rootReducer'
import {createStore} from 'redux'
import App from './components/App';
import './css/style.css';

export const store = createStore(todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



if (module.hot) {
  module.hot.accept();
}


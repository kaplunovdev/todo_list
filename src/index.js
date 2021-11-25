import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import './css/style.css';
import rootReducers from './store/reducers/index';
import todos from './store/reducers/todos';


export const store = createStore(todos,
  applyMiddleware(thunkMiddleware),
 
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


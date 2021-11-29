import { combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import todos from './todos';



 export const rootReducers = combineReducers({todos});
   


export default rootReducers;
import { combineReducers } from 'redux'
import { ADD_TODOS } from './types'



function addTodos(state = [], action) {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        id: action.id,
        id: 0,
        active: true,
        text: ''

      }
    default: return state
  }
}

export const rootReducer = combineReducers({
  add: addTodos
})

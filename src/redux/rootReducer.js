import { combineReducers } from 'redux'
import { ADD_TODOS } from './types'



function addTodos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        id: action.id,
        id: 0,
        active: true,
        text: 'Новая тудуха!!!!!'

      }
    default: return state
  }
}

const initialState = {
  items: [],
  fullItems: [],
}




export const rootReducer = combineReducers({
  add: addTodos
})

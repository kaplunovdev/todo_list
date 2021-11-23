import { combineReducers } from 'redux'
import { ADD_TODOS, TOGGLE_TODOS, REMOVE_TODOS } from './types'

const initialState = []

function todos(state = initialState, action) {

  //console.log('arrID',arr)
  switch (action.type) {
    case "ADD_TODOS":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isComplete: false

        }
      ]
    case "REMOVE_TODOS":
      return [
        ...state.slice(0, action.payload),
    ...state.slice(action.payload + 1)

      ]
    case 'TOGGLE_TODOS':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      )
     
    default: return state
  }



}










export const rootReducer = combineReducers({
  AllTodo: todos
})

export default todos;
import { combineReducers } from 'redux'
import { ADD_TODOS, TOGGLE_TODOS, REMOVE_TODOS } from './types'



const initialState = {
  items: [],
  filteredItems: [],
  nextId: 0
}

function todos(state = initialState, action) {

  //console.log('arrID',arr)
  switch (action.type) {
    case "ADD_TODOS":
      const arr = [...state.items]
      arr.push({
        id: state.nextId++,
        text: action.payload,
        isComplete: false
      })

      return {
        ...state, items: [...arr]
      }




    // case "REMOVE_TODOS":
    //   return [
    //     ...state.slice(0, action.payload),
    //     ...state.slice(action.payload + 1)

    //   ]
    // case 'TOGGLE_TODOS':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? { ...todo, isComplete: !todo.isComplete }
    //       : todo
    //   )

    default: return state
  }



}











export const rootReducer = combineReducers({
  AllTodo: todos
})

export default todos;

const initialState = {
  items: [],
  filteredItems: [],
  nextId: 0
}

function todos(state = initialState, action) {

  switch (action.type) {
  
    case "ADD_TODOS":
      const idArr = state.items.map(elem => elem.id)
      const idElem = state.items.length === 0 ? 0 : Math.max.apply(null, idArr) + 1
      const arr = [...state.items]
      arr.push({
        id: idElem,
        text: action.payload,
        isComplete: false
      })

      return {
        ...state, items: [...arr]
      }
    case "REMOVE_TODOS":
      return {
        ...state,
        items: state.items.filter(elem => elem.id !== action.payload),
        filteredItems: state.items.filter(elem => elem.id !== action.payload)

      }
    case 'TOGGLE_TODOS':
      return {
        ...state,
        filteredItems: [...state.items],
        items: [...state.items.map(todo =>
          todo.id === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo
        )]

      }
    case 'ACTIVE_TODOS':
      const arrFilter = [...state.items]
      const updateArr = arrFilter.filter(elem => elem.isComplete === false)
      return {
        ...state,
        items: updateArr,
        filteredItems: [...arrFilter]
      }
    case 'COMPLETE_TODOS':
      const array = [...state.filteredItems]
      const arrComplete = array.filter(elem => elem.isComplete === true)
      return {
        ...state,
        items: arrComplete,
        filteredItems: [...state.filteredItems]
      }
    case 'REMOVE_COMPLETE_TODOS':
      const arrRemove = [...state.items]
      const removeComplete = arrRemove.filter(elem => !elem.isComplete)
      return {
        items: [...removeComplete],
      }
    case 'REMOVE_ACTIVE_TODOS':
      const arrActive = [...state.items]
      const removeActive = arrActive.filter(elem => elem.isComplete)
      return {
        items: [...removeActive],
      }

    case 'ALL_TODOS':

      return {
        ...state,
        items: [...state.filteredItems],
      }

    default: return state
  }

}



export default todos;
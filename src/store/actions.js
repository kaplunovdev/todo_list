
export function addTodo(todo) {
  return {
    type: 'ADD_TODOS',
    payload: todo,
  }
}
export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODOS',
    payload: id
  }
}
export function removeTodo(index) {
  return {
    type: 'REMOVE_TODOS',
    payload: index
  }
}
export function activeTodo(id) {
  return {
    type: 'ACTIVE_TODOS',
    payload: id
  }
}
export function showAllTodo(id) {
  return {
    type: 'ALL_TODOS',
    payload: id
  }
}
export function showCompleteTodo(id) {
  return {
    type: 'COMPLETE_TODOS',
    payload: id
  }
}
export function removeCompleteTodo(id) {
  return {
    type: 'REMOVE_COMPLETE_TODOS',
    payload: id
  }
}
export function removeActiveTodo(id) {
  return {
    type: 'REMOVE_ACTIVE_TODOS',
    payload: id
  }
}
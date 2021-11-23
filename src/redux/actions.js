import { bindActionCreators } from 'redux'
import {ADD_TODOS} from './types'

let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODOS',
  id: nextTodoId++,
  text:text,
  isComplete: action.id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})



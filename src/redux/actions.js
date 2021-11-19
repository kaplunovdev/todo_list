import {ADD_TODOS} from './types'

export function addTodo() {
  return {
    type: ADD_TODOS,
    id:0,
    active:true,
    text:''
  }
}



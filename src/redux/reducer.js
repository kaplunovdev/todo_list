import * as actions from './action';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case action.TASK_ADD:
      return [...state, {
        id: ++lastId,
        title: action.payload.title,
        completed: false,
      }];

    case action.TASK_TOGGLE:
      return state.map(task => {
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed }
        return task;
      });

    case action.TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);

    default:
      return state;
  }
}
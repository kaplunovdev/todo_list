export const TASK_ADD = 'TASK_ADD';
export const TASK_TOGGLE = 'TASK_TOGGLE';
export const TASK_REMOVE = 'TASK_REMOVE';



export const addTask = task => ({
    type: TASK_ADD,
    payload: task
  });
  
  export const toggleTask = id => ({
    type: TASK_TOGGLE,
    payload: { id }
  });
  
  export const removeTask = id => ({
    type: TASK_REMOVE,
    payload: { id }
  })
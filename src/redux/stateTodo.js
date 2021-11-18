import { createSlice } from "@reduxjs/toolkit";

export const stateTodo = createSlice({
    items: [],
    fullTasks: [],
    reducers: {
        addTodo: state => {
            const { items } = state;
            const { fullTasks } = state;
            const idTask = items.length !== 0 ? items.length : 0;

            items.push({
                id: idTask,
                active: true,
                text: ''
            });


            fullTasks.push({
                id: idTask,
                active: true,
                text: ''
            })
        }
    }

})

export const {addTodo} = stateTodo.actions
export default stateTodo.reducer
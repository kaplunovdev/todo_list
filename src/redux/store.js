import { configureStore } from "@reduxjs/toolkit";
import stateTodo from "./stateTodo";

export default configureStore({
    reducer:{
        todo:stateTodo
    }
})
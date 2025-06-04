import { createSlice } from "@reduxjs/toolkit";

let initialState={
    todoList:[]
}


let todoListSlice=createSlice({
    name:"todoList",
    initialState,
    reducers:{
        addTodoItem:(state,action)=>{
            state.todoList.push(action.payload)
        },
        removeTodoItem:(state,action)=>{
            const id = action.payload.id;
            const index = state.todoList.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todoList.splice(index, 1);
            }
        },
        updateTodoItem:(state,action)=>{        
            let id=action.payload.id
            let todo=state.todoList.find(todo=>todo.id===id)
            todo.isCompleted=true;
        },
    }
})

export let {addTodoItem,removeTodoItem,updateTodoItem}=todoListSlice.actions

export default todoListSlice.reducer;
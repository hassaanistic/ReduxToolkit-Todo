import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generate unique Ids for the TODOs

const initialState = {
    todos: [
        { id: 1, text: "Hello" }
    ],
};


function addTodoFunc(state, action) {
    const todo = {
        id: nanoid(),
        text: action.payload,
    }
    state.todos.push(todo);
}

function updateTodoFunc(state, action) {
    const { id, newText } = action.payload;
    const todoToUpdate = state.todos.find(todo => todo.id === id);

    if (todoToUpdate) {
        todoToUpdate.text = newText;
    }
}



const todoSlice = createSlice({
    name: "todo",

    initialState,

    reducers: {
        addTodo: addTodoFunc, //reference the func NOT calling
        updateTodo: updateTodoFunc,

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                //filter return true values it compare 
                //or ya just unha pass kray ga jis ki Id same nhi ha 
                (todo) => todo.id !== action.payload
            );
        },
        
    },

});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

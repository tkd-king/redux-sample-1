import { createSlice, nanoid } from "@reduxjs/toolkit"; // Added missing semicolon

const initialState = {
    todos: [{ id: 1, text: "hello world" }] // Added space after ':' for consistency
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload); // Completed line and added semicolon
        },
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer; // Added missing semicolon

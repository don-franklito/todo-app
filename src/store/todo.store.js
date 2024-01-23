import { Todo } from "../todos/models/todo.model";

//Centralizar acciones
const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del dinero')
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log('Inicia el store');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return state.todos;
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid!`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error('The description is required');

    state.todos.push(new Todo(description));
}

/**
 * 
 * @param {Id} todoId Identify Id
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo => {
        if(todo.id === todoId) {
            todo.done = !todo.done;
        }

        return todo;
    });
}

/**
 * 
 * @param {Id} todoId Identify Id
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteAllCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done );
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteAllCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
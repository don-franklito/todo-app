import { Todo } from '../models/todo.model';
import { createHtml } from ".";

let element;

/**
 * 
 * @param {String} elementHtml 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementHtml, todos = []) => {

    if( !element ) 
        element = document.querySelector(elementHtml);

    if( !element ) throw new Error('Element ID not found'); 

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createHtml(todo) );
    });
}
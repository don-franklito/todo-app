import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList: '.todo-list',
    NewTodoItem: '#new-todo-input',
    Toggle: '.toggle'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(elementIDs.TodoList, todos);      
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    }) ();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(elementIDs.NewTodoItem);
    const todoListUL = document.querySelector( elementIDs.TodoList );

    //Listeners
    newDescriptionInput.addEventListener('keyup', (e) => {
      
        if ( e.keyCode !== 13 ) return;

        if ( e.target.value.trim().length === 0) return;

        todoStore.addTodo(e.target.value);
        displayTodos();
        e.target.value = '';
    });

    todoListUL.addEventListener('click', (e) => {       
        const element = e.target.closest('[data-id]');
        console.log(element);
    });

}

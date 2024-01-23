export const createHtml = (todo) => {
    if(!todo) throw new Error('A Todo Object is required');

    //destructurar el Todo
    const { done, id, description } = todo;

    const html = `       
            <div class="view">
                <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
                <label>${ description }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

    const liElement = document.createElement('li')
    liElement.innerHTML = html;
    liElement.setAttribute('todo-id', id);

    if( todo.done ) {
        liElement.classList.add('completed');
    }
   

    return liElement;
}
function createTodoItem(title, id, parent, timeH, timeM) {
    let hours = document.querySelector('.todo-header-hours').textContent;
    let minutes = document.querySelector('.todo-header-minutes').textContent;

    const item = `<li class="todo-item" data-id=${id}>
                    <input class="todo-item-checkbox" type="checkbox">
                    <label class="todo-item-title">${title}</label>
                    <input class="todo-item-textfield" type="text">
                    <div class="todo-item-task-time"><span class="todo-item-task-time-hours">${timeH}</span>:<span class="todo-item-task-time-minutes">${timeM}</span></div>
                    <div class="todo-item-time">
                        <input class="todo-item-time-hours" type="number" min="00" max="23" value="${hours}"> : <input class="todo-item-time-minutes"  type="number" min="00" max="59" value="${minutes}">
                    </div>
                    <button class="todo-item-save">Сохранить</button>
                    <div class="todo-item-dots">
                        <img src="img/more.svg" alt="">
                        <div class="todo-item-dots-more">
                        <div class="todo-item-dots-edit">Изменить</div>
                        <div class="todo-item-dots-time">Установить время</div>
                        <div class="todo-item-dots-delete">Удалить</div>
                        </div>
                    </div>                    
                </li>`;

    const position = "beforeend";

    parent.insertAdjacentHTML(position, item);

    let todoItem = parent.lastChild;

    if (parent === todoListComplete) {
        todoItem.classList.add('completed');
        let checkbox = todoItem.querySelector('.todo-item-checkbox');
        checkbox.setAttribute('checked', 'checked');

        addLocal(title, true, timeH, timeM);
    } else {
        addLocal(title, false, timeH, timeM);
    }
    if (timeH !== undefined && timeM !== undefined) {
        todoItem.querySelector('.todo-item-task-time').classList.add('active');   
    }

    bindEvents(todoItem);
    calculatePercentage ();

}

export default createTodoItem;
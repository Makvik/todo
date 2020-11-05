function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.todo-item-checkbox');
    const dots = todoItem.querySelector('.todo-item-dots img'); // Показ опций задачи
    const editButton = todoItem.querySelector('.todo-item-dots-edit');
    const deleteButton = todoItem.querySelector('.todo-item-dots-delete');
    const addTime = todoItem.querySelector('.todo-item-dots-time');

    checkbox.addEventListener('change', toggleTodoItem);
    dots.addEventListener('click', openOptions);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
    addTime.addEventListener('click', addTimeTodoItem);
}

export default bindEvents;
function addTimeTodoItem() {
    const listItem = this.closest('.todo-item'),
        listId = listItem.dataset.id;
    
    let todoItemTime = listItem.querySelector('.todo-item-time'),
        todoItemTimeHours = listItem.querySelector('.todo-item-time-hours'),
        todoItemTimeMinutes = listItem.querySelector('.todo-item-time-minutes'),
        todoItemTaskTime = listItem.querySelector('.todo-item-task-time'),
        todoItemTaskTimeHours = listItem.querySelector('.todo-item-task-time-hours'),
        todoItemTaskTimeMinutes = listItem.querySelector('.todo-item-task-time-minutes'),
        todoItemSave = listItem.querySelector('.todo-item-save');

    todoItemSave.classList.add('active');
    todoItemTime.classList.add('active');

    todoItemSave.addEventListener('click', () => {
        todoItemTaskTime.classList.add('active');
        todoItemSave.classList.remove('active');
        todoItemTime.classList.remove('active');

        

        if (todoItemTimeHours.value >= 0 && todoItemTimeHours.value < 10 && todoItemTimeHours.value.length !== 2) {
            todoItemTimeHours.value = '0' + todoItemTimeHours.value;
        } 
        if (todoItemTimeMinutes.value >= 0 && todoItemTimeMinutes.value < 10 && todoItemTimeMinutes.value.length !== 2) {
            todoItemTimeMinutes.value = '0' + todoItemTimeMinutes.value;
        }

        todoItemTaskTimeHours.textContent = todoItemTimeHours.value;
            todoItemTaskTimeMinutes.textContent = todoItemTimeMinutes.value;

        for (let i = 0; i < list.length; i++) {
            if (list[i].id == listId) {
                list[i].timeHours = todoItemTaskTimeHours.innerText;
                list[i].timeMinutes = todoItemTaskTimeMinutes.innerText;
                localStorage.setItem('ToDo', JSON.stringify(list));
            }
        }

    });

}

export default addTimeTodoItem;
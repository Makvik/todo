function editTodoItem() {
    const listItem = this.closest('.todo-item');
    
    let title = listItem.querySelector('.todo-item-title').innerText;
    

    let modal = document.querySelector('.modal'),
        modalDialog = modal.querySelector('.modal-dialog'),
        modalMore = modal.querySelector('.modal-dialog-item-more input'),
        modalSwitch = modal.querySelectorAll('.switch');

    const close = modal.querySelector('.modal-close');

    modal.style.display = 'flex';

    setTimeout(() => {
        modalDialog.classList.add('modal-dialog-open');
    }, 100);

    modalMore.value = title;

    modalSwitch.forEach(item => {
        item.addEventListener('click', () => {
            let round = item.querySelector('.switch-round'),
                parent = item.parentElement,
                parentMore = parent.querySelector('.modal-dialog-item-more');

            round.classList.toggle('switched');
            item.classList.toggle('active');
            parent.classList.toggle('active');
            parentMore.classList.toggle('active');
        });
    });
    
    close.addEventListener('click', () => {

        modalSwitch.forEach(item => {
            
            if (item.classList.contains('active')) {

                if (item.parentElement.classList.contains('modal-dialog-name')) {
                    changes.a = item.parentElement.querySelector('.modal-dialog-item-more input').value;
                } else if (item.parentElement.classList.contains('modal-dialog-date')) {
                    changes.b = item.parentElement.querySelector('.modal-dialog-item-more input').value;
                }
                
            }
        });
        
        modalDialog.classList.remove('modal-dialog-open');
    setTimeout(() => {
        modal.style.display = '';        
    }, 300);
    });
    

    // const listItem = this.closest('.todo-item');
    // let listId = listItem.dataset.id;
    // const title = listItem.querySelector('.todo-item-title');
    // const editInput = listItem.querySelector('.todo-item-textfield'),
    //     todoItemSave = listItem.querySelector('.todo-item-save');

    // listItem.classList.add('editing');
    // editInput.value = title.innerText;
    // todoItemSave.classList.add('active');
    // todoItemSave.addEventListener('click', () => {
    //     listItem.classList.remove('editing');
    //     todoItemSave.classList.remove('active');
    //     title.innerText = editInput.value;

    //     for (let i = 0; i < list.length; i++) {
    //         if (list[i].id == listId) {
    //             list[i].name = title.innerText;
    //             localStorage.setItem('ToDo', JSON.stringify(list));
    //         }
    //     }
    // });    

}

export default editTodoItem;
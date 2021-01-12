let todoItems = [];
let add1 = document.getElementById('input');
let addbtn = document.getElementById('addBtn');
let list = document.getElementById('list');
let deleteBtn = document.createElement('button');
let editBtn = document.createElement('button');
deleteBtn.innerHTML = "Delete";
editBtn.innerHTML = "Edit";

let editIndex;


let i = 0;

function add() {
    if (add1.value === ''){
        alert('Please Type Some Value')
    }
    else {
        todoItems.push(add1.value);
    }
    add1.value = '';
    render();

}

function render() {
    list.innerHTML = '';
    for ( i = 0; i < todoItems.length; i++) {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let text = document.createTextNode(todoItems[i]);
        deleteBtn = document.createElement('button');
        editBtn = document.createElement('button');
        deleteBtn.innerHTML = "DELETE";
        editBtn.innerHTML = "EDIT";

        li.className= 'li';


        deleteBtn.setAttribute(`onclick`,'deleteTodo(' + i + ')');
        editBtn.setAttribute(`onclick`,'editTodo(' + i + ')');


        li.appendChild(text);
        list.appendChild(li);
        div.appendChild(deleteBtn)
        div.appendChild(editBtn)
        li.appendChild(div);

    }



    console.log(todoItems);
}

function deleteTodo(todoIndex) {

    todoItems.splice(todoIndex,1);
    render()
}
function editTodo(todoIndex) {
    editIndex = todoIndex;
    add1.value = todoItems[todoIndex];
    addbtn.setAttribute('onclick', 'saveTodo()');
}

function saveTodo() {
    todoItems[editIndex]=  add1.value;
    add1.value = '';
    addbtn.innerHTML = 'Add';
    addbtn.setAttribute('onclick', 'add()');
    render();
}
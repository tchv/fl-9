const one = 1;

function get_todos() {
    let todos = new Array();
    let todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
 
function add() {
    let task = document.getElementById('task').value;
 
    let todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, one);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    let todos = get_todos();
    let check = '<i class="material-icons">check_box_outline_blank</i>';
    let remove_start = '<i class="material-icons remove" id="';
    let remove_end = '">delete</i>';
 
    let html = '<ul>';
    for(let i=0; i<todos.length; i++) {
        html += '<li>' + check + '<span>' + todos[i] + '</span>' + remove_start + i + remove_end + '</li>';
    }
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    let buttons = document.getElementsByClassName('remove');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
 
document.getElementById('add').addEventListener('click', add);
show();

let clearButtons = document.getElementsByClassName('material-icons');

for (let i = 0; i < clearButtons.length; i++){

  clearButtons[i].onclick = function(e){
  
    let selector = this.getAttribute('data-clear-selector');
    
    document
      .querySelectorAll(selector)
      .forEach(function(item, idx){
        item.value = '';
      });
  };
}

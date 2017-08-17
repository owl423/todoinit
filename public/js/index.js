(function(window, document){
  'use strict';
  function addListItem(e){
    if(!input.value.trim()) return ;
    // enter가 들어왔을 경우 또는 클릭이벤트일 경우
    if((e.keyCode === 13) || e.type === 'click'){
      insertItem(todoList, input.value);
      input.value = '';
      input.focus();
    }
  }
  function insertItem(element, str){
    element.insertAdjacentHTML('beforeend', '<li class="todo-item">' + str + '<button class="delete">삭제</button></li>');
    deleteItem();
  }
  function deleteItem(){
    var delButton = document.querySelectorAll('.delete');
    console.log('delButton: ', delButton[delButton.length-1]);
    delButton[delButton.length-1].addEventListener('click', function(){
      todoList.removeChild(this.parentNode);
    });
  }
  var input = document.querySelector('.input');
  console.log('input: ', input);
  var button = document.querySelector('.button');
  console.log('button: ', button);
  var todoList = document.querySelector('.todo-list');
  console.log('todoList: ', todoList);
  
  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);
  // CRUD create, read, update, delete
  // HTTP method post, get, put, delete
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/toDoList', true);
  xhr.send(null);
  xhr.onreadystatechange = function(){
    if(this.readyState === 4){
      if(this.status === 200){
        console.log('this.responseText: ', this.responseText);
        var toDoItemList = JSON.parse(this.responseText);
        console.log('toDoItemList: ', toDoItemList);
        toDoItemList.forEach(function(item){
          console.log('item.task: ', item.task);
          insertItem(todoList, item.task);
        });
      }
      else{
        console.error('GET failed');
      }
    }
  }
})(window, document);

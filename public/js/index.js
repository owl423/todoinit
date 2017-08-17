(function(window, document){
  'use strict';
  function addListItem(e){
    if(!input.value.trim()) return ;
    // enter가 들어왔을 경우 또는 클릭이벤트일 경우
    if((e.keyCode === 13) || e.type === 'click'){
      todoList.insertAdjacentHTML('beforeend', '<li class="todo-item">' + input.value + '<button class="delete">삭제</button></li>');
      input.value = '';
      var delButton = document.querySelectorAll('.delete');
      console.log('delButton: ', delButton[delButton.length-1]);
      delButton[delButton.length-1].addEventListener('click', function(){
        todoList.removeChild(delButton[delButton.length-1].parentNode);
      });
      input.focus();
    }
  }
  var input = document.querySelector('.input');
  console.log('input: ', input);
  var button = document.querySelector('.button');
  console.log('button: ', button);
  var todoList = document.querySelector('.todo-list');
  console.log('todoList: ', todoList);
  
  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);
})(window, document);
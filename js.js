const ul = document.querySelector('.ul');
let todos = [];

const standard = document.querySelector('.standard');
const summer = document.querySelector('.summer');
const winter = document.querySelector('.winter');
const spring = document.querySelector('.spring');
const fall = document.querySelector('.fall');

const subBtn = document.querySelector('#submitBtn').addEventListener("click", function(){
    /* todos.forEach((item) => {
      ul.innerHTML += `<li class="todoItem">${item}</li>`;
     }); */
     addToList()
 });

 const todoText = document.querySelector('#todoText')
  todoText.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
      addToList()
    }
  });

  function addToList() {
    const todoText = document.querySelector('#todoText');
    todos.push(todoText.value);
    todoText.value = ''; 

    for(i = todos.length - 1; i < todos.length; i++) {
      ul.innerHTML += `
      <li class="todoItem">
        <strong>${todos[i]}</strong>
        <div class="td">
          <input class="checkClass" type="checkbox">
          <div class"todoNav" >
            <i class="fas fa-ellipsis-v"></i>
            <div class="todoDrop">
              <i class="fas fa-trash"></i>
              <button class="editBtn">Edit</button>
            </div>
          </div>
        </div>
      </li>`;
     }
  }
 
const trashBtn = document.querySelector('.ul').addEventListener('click', function(event){  
  if (!event.target) { return; }

  else if (event.target.matches('.fa-trash')) {
    event.target.closest('.todoItem').remove(); 
      }
  else if(event.target.matches('.todoItem')) {

    let editText = event.target.innerText;
    const todoText = document.querySelector('#todoText');
    todoText.value = editText;
  }
  else if (event.target.matches('.fa-ellipsis-v')) {

    const todoDrop = event.target.nextElementSibling;
       console.log(todoDrop)
    if (todoDrop.style.display === 'none' || todoDrop.style.display === '' ) {
     todoDrop.style.display = 'block'
     }
      else{
        todoDrop.style.display = 'none'
    } 
      }
    });

standard.addEventListener('click', function(){
  const standardBtn = document.querySelector('.standard').getAttribute('class');
  changeName(standardBtn);
});
   
summer.addEventListener('click', function(){
  const summerBtn = document.querySelector('.summer').getAttribute('class');
  changeName(summerBtn);
  }) ;

winter.addEventListener('click', function(){
  const winterBtn = document.querySelector('.winter').getAttribute('class');
  changeName(winterBtn);
  }) ;

spring.addEventListener('click', function(){
  const springBtn = document.querySelector('.spring').getAttribute('class');
  changeName(springBtn);  
  });

fall.addEventListener('click', function(){
  const fallBtn = document.querySelector('.fall').getAttribute('class');
  changeName(fallBtn); 
  });

  function changeName(colorClass) {
    const bodyClass = document.querySelector('body').getAttribute('class');
    if (colorClass !== bodyClass){
      const body = document.querySelector('body');
      body.classList.remove(bodyClass);
      body.classList.add(colorClass); 
    }
    else {
      console.log('You are already using this theme'); 
    }
  }

  
const hamtest = document.querySelector('.fa-hamburger').addEventListener('click', function(){
  const divtest = document.querySelector('.divtest');
  if (divtest.style.display === 'none' || divtest.style.display === '' ) {
  divtest.style.display = 'block'
 }
  else{
  divtest.style.display = 'none'
} 
});





 





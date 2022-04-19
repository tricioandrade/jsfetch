import {request} from './resource/app.js';

let box = document.querySelector('.todo ul');

function setTodo(todos){
	for(const key in todos) {
		box.innerHTML = `<li>${todos.title}</li>`;
	}
}

request.get('https://jsonplaceholder.typicode.com/todos/50')
.then(data => {
  console.log(data)
  box.innerHTML = (data);
  
})
.catch(erro => console.log(erro));

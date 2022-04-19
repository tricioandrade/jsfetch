import {request} from './resource/app.js';
let box = document.querySelector('div.todo ul');
const req = new request('https://jsonplaceholder.typicode.com/todos');


window.addEventListener('load', () => {
  box.innerHTML = `<span class='preloader'></span>`;
  
  req.get()
    .then(data => {
      box.innerHTML = ``;
      listTodos(data);
    })
    .catch(erro => box.innerHTML = erro);
});



function listTodos(todos) {
  
	todos.forEach(element => {
		console.log(element)
		box.innerHTML +=`<li class='row shadow-lg rounded mb-3 p-2 list-group-item col-sm-12 m-auto'>
							<span class='col-lg-2 col-sm-1'>${element.id}</span>
							<span class='col-10 col-sm-11'>${element.title}</span>
						</li>`;
	});
  
}

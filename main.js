import {request} from './resource/app.js';
let box = document.querySelector('div.todo ul');
const req = new request('https://jsonplaceholder.typicode.com/todos');



function listTodos(todos) {

	todos.forEach(element => {
		console.log(element)
		box.innerHTML +=`<li class='row shadow-lg rounded mb-3 p-2 list-group-item'>
							<span class='col-2'>${element.id}</span>
							<span class='col-10'>${element.title}</span>
						</li>`;
	});
}

req.get()
	.then(data => {
		box.innerHTML = `<span class='preloader'></span>`;		
		box.innerHTML = ``;
		listTodos(data);
})
.catch(erro => box.innerHTML = erro);

import {request} from './resource/app.js';

let box = document.querySelector('div.todo ul');

const req = new request('https://jsonplaceholder.typicode.com/todos');

req.get()
.then(data => {
	console.log(data);
	data.forEach(element => {
		console.log(element)
		box.innerHTML +=`<li class='row shadow-lg rounded mb-3 p-2'>
							<span class='col-1'><i class='fa fa-user-id'></i></span>
							<span class='col-2'>${element.id}</span>
							<span class='col-9'>${element.title}</span>
						</li>`;
	});
})
.catch(erro => box.innerHTML = erro);

const request = {
  get: async function(uri){
     const r = await fetch(uri);
     console.log(r);
     return await r.text();
  }
}


let box = document.querySelector('.todo');

request.get('https://jsonplaceholder.typicode.com/todos/1')
.then(data => {
  box.innerHTML = data;
  console.log(data)
})
.catch(erro => console.log(erro));

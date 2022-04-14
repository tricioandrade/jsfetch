const request = {
  get: async function(uri){
     const r = await fetch(uri);
     console.log(r);
     return await r.text();
  }
}


let box = document.querySelector('.box');

request.get('https://www.google.com/tricioandrade')
.then(data => {
  box.innerHTML = data;
  console.log(data)
})
.catch(erro => console.log(erro));

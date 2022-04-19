export const request = {
  get: async function(uri){
     const r = await fetch(uri);
     console.log(r);
     return await r.json();
  }
}
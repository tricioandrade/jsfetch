export class request{
	constructor (uri){
		this.url = uri;
	}

  async get(){
     const response = await fetch(this.url);
     return await response.json();
  }
}

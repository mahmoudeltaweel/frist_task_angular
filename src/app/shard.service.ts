import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShardService {


  constructor(private http: HttpClient) { }
  private url='https://65426964ad8044116ed35548.mockapi.io/';


  CreateNewHero(hero:any){
    console.log(hero);
    return this.http.post(this.url + 'heros', hero);
  }
  getAllHeros(){
    return this.http.get(this.url + 'heros')
  }

  deleteHero(id:any){
    return this.http.delete(this.url + `heros/${id}`)
  }
}

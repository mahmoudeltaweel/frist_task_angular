import { Component } from '@angular/core';
import { ShardService } from '../shard.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  hero={
    name:"",
    power:"",
    image:""
  }
  addCard(){
    this._shard.CreateNewHero(this.hero)
    .subscribe(
      res=>{
        console.log("res" , res);

        this.hero={
          name:"",
          power:"",
          image:""
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
  constructor(public _shard : ShardService){

  }

}

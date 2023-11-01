import { Component } from '@angular/core';
import { ShardService } from '../shard.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public _shard : ShardService){
  }
  heros:any;
  ngOnInit():void{
    this._shard.getAllHeros().subscribe(
      res=>{

       this.heros=res;

      },
      err=>{
        console.log(err);
      }
    )
  }
  deletehero(id:any){
    this._shard.deleteHero(id)
    .subscribe(
      res=>{
       this.ngOnInit();
      },
      err=>{
        console.log(err);

      }
    )
  }

}

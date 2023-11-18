import { Component } from '@angular/core';
import { ShardService } from '../shard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  hero:any;
  id:any;
  constructor(public _shard:ShardService , private act: ActivatedRoute){}

  update(){
    this._shard.updateHero(this.id , this.hero).subscribe
    (
      res=>{
        console.log(res);
        

      },
      err=>{
        console.log(err);

      }
    )

  }

  ngOnInit():void{
    this.id=this.act.snapshot.paramMap.get('id');
    this._shard.getHeroById(this.id).subscribe(
      res=>{
       this.hero=res;
       debugger
      },
      err=>{
        console.log(err);

      }
    )
  }
}

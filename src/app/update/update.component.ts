import { Component } from '@angular/core';
import { ShardService } from '../shard.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  hero:any;
  constructor(public _shard:ShardService){}

  update(){

  }
}

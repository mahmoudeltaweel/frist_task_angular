import { Component } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  hero={
    name:"",
    power:"",
    image:""
  }

  heros:any[]=[];

  addCard(){
    this.heros.push(this.hero);
    this.hero={
      name:"",
      power:"",
      image:""
    }
  }
}

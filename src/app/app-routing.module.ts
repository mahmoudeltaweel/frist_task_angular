import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"", redirectTo:"/create" , pathMatch:"full"},
  {path:'create' , component: CreateComponent },
  {path:'list' , component:ListComponent},
  {path:'update/:id' , component:UpdateComponent},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpendoorComponent } from './opendoor/opendoor.component'

const routes: Routes = [ 
  {path: '', component: OpendoorComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

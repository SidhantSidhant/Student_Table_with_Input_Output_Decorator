import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './page/Route/parent/parent.component';
import { ChildComponent } from './page/Route/child/child.component';

const routes: Routes = [{
  path : ':obj', component : ChildComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesEjmpComponent } from './components/pipes-ejmp/pipes-ejmp.component';

const routes: Routes = [
  {path:'', component: PipesEjmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {path:'home', component:CalculatorComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

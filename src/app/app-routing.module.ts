import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BmiComponent } from './bmi/bmi.component';
import { CalorieComponent } from './calorie/calorie.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [

  {path:"addition",component:AdditionComponent},
  {path:"subtraction",component:SubtractionComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"bmi",component:BmiComponent},
  {path:"calorie",component:CalorieComponent},
  {path:"temperature",component:TemperatureComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

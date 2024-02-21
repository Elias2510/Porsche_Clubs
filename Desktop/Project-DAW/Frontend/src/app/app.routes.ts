// app.routes.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FestComponent } from './fest/fest.component';
import { PosesorComponent } from './posesor/posesor.component';
import { ModelComponent } from './model/model.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'fest', component: FestComponent},
  {path:'posesor', component: PosesorComponent},
  {path:'model', component: ModelComponent},

  {path:'login-page', component:LoginPageComponent},
  {path:'register-page', component:RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeComponent],
  exports: [RouterModule] 
})
export class AppRoutingModule { }

export { routes }; 

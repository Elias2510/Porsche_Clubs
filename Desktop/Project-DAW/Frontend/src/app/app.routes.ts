import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { FestComponent } from './fest/fest.component';
import { PosesorComponent } from './posesor/posesor.component';
import { BadgeComponent } from './badge/badge.component';

export const routes: Routes = [
  { path: 'model', component: ModelComponent },
  { path: 'fest', component: FestComponent },
  { path: 'posesor', component: PosesorComponent },
  { path: 'badge', component: BadgeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { FestComponent } from './fest/fest.component';
import { PosesorComponent } from './posesor/posesor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Porsche_Club_Romania';
}
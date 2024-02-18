import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FestComponent } from './fest/fest.component';
import { PosesorComponent } from './posesor/posesor.component';
import { ModelComponent } from './model/model.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HomeComponent,FestComponent,ModelComponent,PosesorComponent,HeaderComponent, NgFor, NgIf,FormsModule],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Porsche_Club_Romania';
}

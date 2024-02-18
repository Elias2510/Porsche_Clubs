import { Component, OnInit } from '@angular/core';
import { FestService } from '../services/fest.service';
import { PosesorService } from '../services/posesor.service';
import { ModelService } from '../services/model.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone : true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgFor, NgIf,RouterModule]
})
export class HomeComponent implements OnInit {
  fests: any[] = [];
  posesori: any[] = [];
  modele: any[] = [];
  sunt_logat: boolean = false;
  constructor(
    private festService: FestService,
    private posesorService: PosesorService,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
    this.loadFests();
    this.loadPosesori();
    this.loadModels();
  }

  loadFests(): void {
    this.festService.getFests().subscribe(
      (response: any) => {
        this.fests = response;
      },
      (error: any) => {
        console.error('Error loading festivals:', error);
      }
    );
  }
  

  loadPosesori(): void {
    this.posesorService.getPosesori().subscribe(
      (response: any) => {
        this.posesori = response;
      },
      (error: any) => {
        console.error('Eroare la încărcarea posesorilor:', error);
      }
    );
  }

  loadModels(): void {
    this.modelService.getModels().subscribe(
      (response: any) => {
        this.modele = response;
      },
      (error: any) => {
        console.error('Eroare la încărcarea modelelor:', error);
      }
    );
  }
}

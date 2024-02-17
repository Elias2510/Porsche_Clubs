import { Component, OnInit } from '@angular/core';
import { FestService } from '../services/fest.service';
import { PosesorService } from '../services/posesor.service';
import { ModelService } from '../services/model.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fests: any[] = [];
  posesori: any[] = [];
  modele: any[] = [];

  constructor(
    private festService: FestService,
    private posesorService: PosesorService,
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
   
      this.loadFests();
    };

    loadFests(): void {
        // Folosește serviciul FestService pentru a face cererea către backend
        this.festService.getFests().subscribe(
          (response: any) => {
            // Dacă cererea este reușită, actualizează lista de festivități
            this.fests = response; // presupunând că răspunsul conține un array de festivități
          },
          (error: any) => {
            // În caz de eroare, poți trata eroarea aici (de exemplu, afișând un mesaj de eroare)
            console.error('Eroare la încărcarea festivităților:', error);
          }
        );

    this.posesorService.getPosesori().subscribe(data => {
      this.posesori = data;
    });

    this.modelService.getModels().subscribe(data => {
      this.modele = data;
    });
    
  }
}

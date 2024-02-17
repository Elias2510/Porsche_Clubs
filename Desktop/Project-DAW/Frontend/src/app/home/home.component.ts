import { Component, OnInit } from '@angular/core';
import { FestService } from '../services/fest.service';
import { PosesorService } from '../services/posesor.service';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-home',
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
    this.festService.getFests().subscribe(data => {
      this.fests = data;
    });

    this.posesorService.getPosesori().subscribe(data => {
      this.posesori = data;
    });

    this.modelService.getModels().subscribe(data => {
      this.modele = data;
    });
  }
}

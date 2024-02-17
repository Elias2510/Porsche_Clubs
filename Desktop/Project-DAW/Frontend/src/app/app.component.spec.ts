import { Component, OnInit } from '@angular/core';
import { PosesorService } from './services/posesor.service';
import { BadgeService } from './services/badge.service';
import { ModelService } from './services/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posesori: any[] = [];
  badges: any[] = [];
  models: any[] = [];

  constructor(
    private posesorService: PosesorService,
    private badgeService: BadgeService,
    private modelService: ModelService
  ) {}

  ngOnInit(): void {
    this.loadPosesori();
    this.loadBadges();
    this.loadModels();
  }

  loadPosesori() {
    this.posesorService.getPosesori().subscribe(data => {
      this.posesori = data;
    });
  }

  loadBadges() {
    this.badgeService.getBadges().subscribe(data => {
      this.badges = data;
    });
  }

  loadModels() {
    this.modelService.getModels().subscribe(data => {
      this.models = data;
    });
  }
}

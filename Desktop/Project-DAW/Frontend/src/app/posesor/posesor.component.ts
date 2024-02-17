import { Component, OnInit } from '@angular/core';
import { PosesorService } from '../services/posesor.service';

@Component({
  selector: 'app-posesor',
  templateUrl: './posesor.component.html',
  styleUrls: ['./posesor.component.css']
})
export class PosesorComponent implements OnInit {
  posesori: any[] = [];

  constructor(private posesorService: PosesorService) { }

  ngOnInit(): void {
    this.posesorService.getPosesori().subscribe(data => {
      this.posesori = data;
    });
  }
}

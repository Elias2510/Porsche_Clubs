import { Component, OnInit } from '@angular/core';
import { PosesorService } from '../services/posesor.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-posesor',
  standalone: true,
  templateUrl: './posesor.component.html',
  styleUrls: ['./posesor.component.css'],
  imports: [NgFor]
})
export class PosesorComponent implements OnInit {
  posesori: any[] = []; // Adjust the type according to your actual model
  

  constructor(private posesorService: PosesorService) { }

  ngOnInit(): void {
    this.posesorService.getPosesori().subscribe(data => {
      this.posesori = data;
    });
  }
}


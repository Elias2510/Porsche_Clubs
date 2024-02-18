import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone : true,
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  imports: [NgFor, NgIf]
})
export class ModelComponent implements OnInit {
  models: any[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.modelService.getModels().subscribe(data => {
      this.models = data;
    });
  }
}

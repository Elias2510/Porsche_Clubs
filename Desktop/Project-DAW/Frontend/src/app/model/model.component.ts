import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
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

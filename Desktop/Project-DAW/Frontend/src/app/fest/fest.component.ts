import { Component, OnInit } from '@angular/core';
import { FestService } from '../services/fest.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-fest',
  templateUrl: './fest.component.html',
  styleUrls: ['./fest.component.css'],
  imports: [NgFor, NgIf]
})
export class FestComponent implements OnInit {
  fests: any[] = []; // Folosim un tip generic aici pentru a permite orice tip de date pentru evenimente
  
  constructor(private festService: FestService) { }

  ngOnInit(): void {
    this.festService.getFests().subscribe(data => {
      this.fests = data;
    });
  }
}

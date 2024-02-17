import { Component, Input, OnInit } from '@angular/core';
import { BadgeService } from '../services/badge.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  imports: [NgIf]
})
export class BadgeComponent implements OnInit {
  @Input() badge: any;
  badges: any[] = [];

  constructor(private badgeService: BadgeService) { }

  ngOnInit() {
    this.loadBadges();
  }

  loadBadges() {
    this.badgeService.getBadges().subscribe(data => {
      this.badges = data;
    });
  }
}

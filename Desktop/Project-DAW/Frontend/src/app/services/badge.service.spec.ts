import { TestBed } from '@angular/core/testing';
import { BadgeService } from './badge.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BadgeService', () => {
  let service: BadgeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BadgeService]
    });
    service = TestBed.inject(BadgeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add more test cases for other methods like getBadgeById, addBadge, updateBadge, deleteBadge
});

import { TestBed } from '@angular/core/testing';
import { FestService } from './fest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FestService', () => {
  let service: FestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FestService]
    });
    service = TestBed.inject(FestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});

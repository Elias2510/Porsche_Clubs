import { TestBed } from '@angular/core/testing';
import { PosesorService } from './posesor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PosesorService', () => {
  let service: PosesorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PosesorService]
    });
    service = TestBed.inject(PosesorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

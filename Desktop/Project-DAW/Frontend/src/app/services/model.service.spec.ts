import { TestBed } from '@angular/core/testing';
import { ModelService } from './model.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ModelService', () => {
  let service: ModelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModelService]
    });
    service = TestBed.inject(ModelService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PosesorComponent } from './posesor.component';
import { PosesorService } from '../services/posesor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PosesorComponent', () => {
  let component: PosesorComponent;
  let fixture: ComponentFixture<PosesorComponent>;
  let posesorService: PosesorService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PosesorComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PosesorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosesorComponent);
    component = fixture.componentInstance;
    posesorService = TestBed.inject(PosesorService);
    spyOn(posesorService, 'getPosesori').and.returnValue(of([])); // Simulăm apelul către serviciu și returnăm date simulate pentru a evita erorile
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Adăugați alte teste aici în funcție de necesități
});

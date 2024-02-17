import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModelComponent } from './model.component';
import { ModelService } from '../services/model.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModelComponent', () => {
  let component: ModelComponent;
  let fixture: ComponentFixture<ModelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModelComponent],
      imports: [HttpClientTestingModule],
      providers: [ModelService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

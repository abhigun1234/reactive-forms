import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDriveFormComponent } from './model-drive-form.component';

describe('ModelDriveFormComponent', () => {
  let component: ModelDriveFormComponent;
  let fixture: ComponentFixture<ModelDriveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDriveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

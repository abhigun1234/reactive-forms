import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormBuilderValidationComponent } from './registration-form-builder-validation.component';

describe('RegistrationFormBuilderValidationComponent', () => {
  let component: RegistrationFormBuilderValidationComponent;
  let fixture: ComponentFixture<RegistrationFormBuilderValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormBuilderValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormBuilderValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

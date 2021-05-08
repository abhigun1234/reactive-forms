import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormBuilderComponent } from './registration-form-builder.component';

describe('RegistrationFormBuilderComponent', () => {
  let component: RegistrationFormBuilderComponent;
  let fixture: ComponentFixture<RegistrationFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasLoginFormComponent } from './petugas-login-form.component';

describe('PetugasLoginFormComponent', () => {
  let component: PetugasLoginFormComponent;
  let fixture: ComponentFixture<PetugasLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetugasLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

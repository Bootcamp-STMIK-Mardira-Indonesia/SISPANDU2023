import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasregisterComponent } from './petugasregister.component';

describe('PetugasregisterComponent', () => {
  let component: PetugasregisterComponent;
  let fixture: ComponentFixture<PetugasregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetugasregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

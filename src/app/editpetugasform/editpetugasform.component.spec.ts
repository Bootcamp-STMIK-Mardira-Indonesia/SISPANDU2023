import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpetugasformComponent } from './editpetugasform.component';

describe('EditpetugasformComponent', () => {
  let component: EditpetugasformComponent;
  let fixture: ComponentFixture<EditpetugasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpetugasformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpetugasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

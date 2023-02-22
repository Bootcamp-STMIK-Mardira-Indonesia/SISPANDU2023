import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsiadminComponent } from './isiadmin.component';

describe('IsiadminComponent', () => {
  let component: IsiadminComponent;
  let fixture: ComponentFixture<IsiadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsiadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

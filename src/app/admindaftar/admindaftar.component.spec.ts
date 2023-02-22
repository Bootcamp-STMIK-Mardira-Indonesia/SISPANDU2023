import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindaftarComponent } from './admindaftar.component';

describe('AdmindaftarComponent', () => {
  let component: AdmindaftarComponent;
  let fixture: ComponentFixture<AdmindaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

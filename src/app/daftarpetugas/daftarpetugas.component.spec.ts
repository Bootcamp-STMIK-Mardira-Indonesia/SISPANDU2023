import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarpetugasComponent } from './daftarpetugas.component';

describe('DaftarpetugasComponent', () => {
  let component: DaftarpetugasComponent;
  let fixture: ComponentFixture<DaftarpetugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarpetugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarpetugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

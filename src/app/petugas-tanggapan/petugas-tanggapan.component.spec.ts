import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasTanggapanComponent } from './petugas-tanggapan.component';

describe('PetugasTanggapanComponent', () => {
  let component: PetugasTanggapanComponent;
  let fixture: ComponentFixture<PetugasTanggapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetugasTanggapanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasTanggapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

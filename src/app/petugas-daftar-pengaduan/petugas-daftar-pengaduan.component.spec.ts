import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasDaftarPengaduanComponent } from './petugas-daftar-pengaduan.component';

describe('PetugasDaftarPengaduanComponent', () => {
  let component: PetugasDaftarPengaduanComponent;
  let fixture: ComponentFixture<PetugasDaftarPengaduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetugasDaftarPengaduanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasDaftarPengaduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

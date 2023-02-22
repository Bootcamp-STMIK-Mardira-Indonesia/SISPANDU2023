import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsilaporanPetugasComponent } from './isilaporan-petugas.component';

describe('IsilaporanPetugasComponent', () => {
  let component: IsilaporanPetugasComponent;
  let fixture: ComponentFixture<IsilaporanPetugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsilaporanPetugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsilaporanPetugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

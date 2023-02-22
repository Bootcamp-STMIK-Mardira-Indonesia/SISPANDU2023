import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiwayatpengaduanComponent } from './riwayatpengaduan.component';

describe('RiwayatpengaduanComponent', () => {
  let component: RiwayatpengaduanComponent;
  let fixture: ComponentFixture<RiwayatpengaduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiwayatpengaduanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiwayatpengaduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

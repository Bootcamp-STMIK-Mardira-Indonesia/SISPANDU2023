import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaturanpetugasComponent } from './pengaturanpetugas.component';

describe('PengaturanpetugasComponent', () => {
  let component: PengaturanpetugasComponent;
  let fixture: ComponentFixture<PengaturanpetugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengaturanpetugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanpetugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

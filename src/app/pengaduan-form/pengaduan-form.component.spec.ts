import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaduanFormComponent } from './pengaduan-form.component';

describe('PengaduanFormComponent', () => {
  let component: PengaduanFormComponent;
  let fixture: ComponentFixture<PengaduanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengaduanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaduanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

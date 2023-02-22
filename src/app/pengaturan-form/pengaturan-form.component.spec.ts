import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaturanFormComponent } from './pengaturan-form.component';

describe('PengaturanFormComponent', () => {
  let component: PengaturanFormComponent;
  let fixture: ComponentFixture<PengaturanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengaturanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

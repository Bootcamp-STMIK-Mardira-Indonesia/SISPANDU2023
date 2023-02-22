import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaduFormComponent } from './pengadu-form.component';

describe('PengaduFormComponent', () => {
  let component: PengaduFormComponent;
  let fixture: ComponentFixture<PengaduFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengaduFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaduFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

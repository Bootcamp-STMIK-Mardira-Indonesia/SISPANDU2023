import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormPengaduanComponent } from './edit-form-pengaduan.component';

describe('EditFormPengaduanComponent', () => {
  let component: EditFormPengaduanComponent;
  let fixture: ComponentFixture<EditFormPengaduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormPengaduanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormPengaduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

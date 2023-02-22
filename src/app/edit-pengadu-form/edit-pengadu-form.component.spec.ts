import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPengaduFormComponent } from './edit-pengadu-form.component';

describe('EditPengaduFormComponent', () => {
  let component: EditPengaduFormComponent;
  let fixture: ComponentFixture<EditPengaduFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPengaduFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPengaduFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

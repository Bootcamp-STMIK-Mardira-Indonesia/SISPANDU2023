import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPengaduanComponent } from './list-pengaduan.component';

describe('ListPengaduanComponent', () => {
  let component: ListPengaduanComponent;
  let fixture: ComponentFixture<ListPengaduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPengaduanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPengaduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

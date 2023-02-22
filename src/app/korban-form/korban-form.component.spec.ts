import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorbanFormComponent } from './korban-form.component';

describe('KorbanFormComponent', () => {
  let component: KorbanFormComponent;
  let fixture: ComponentFixture<KorbanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorbanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorbanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

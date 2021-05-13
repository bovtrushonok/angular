import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFieldComponent } from './empty-field.component';

describe('EmptyFieldComponent', () => {
  let component: EmptyFieldComponent;
  let fixture: ComponentFixture<EmptyFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

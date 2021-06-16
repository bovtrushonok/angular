import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishFieldComponent } from './wish-field.component';

describe('WishFieldComponent', () => {
  let component: WishFieldComponent;
  let fixture: ComponentFixture<WishFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

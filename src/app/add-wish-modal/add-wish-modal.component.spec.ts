import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishModalComponent } from './add-wish-modal.component';

describe('AddWishModalComponent', () => {
  let component: AddWishModalComponent;
  let fixture: ComponentFixture<AddWishModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWishModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

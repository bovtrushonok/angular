import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishBlockComponent } from './add-wish-block.component';

describe('AddWishModalComponent', () => {
  let component: AddWishBlockComponent;
  let fixture: ComponentFixture<AddWishBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWishBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWishBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

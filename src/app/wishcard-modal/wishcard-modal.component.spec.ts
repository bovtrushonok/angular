import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWishcardModalComponent } from './wishcard-modal.component';

describe('EditWishcardModalComponent', () => {
  let component: EditWishcardModalComponent;
  let fixture: ComponentFixture<EditWishcardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWishcardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWishcardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

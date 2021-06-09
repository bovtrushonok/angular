import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWishBlockComponent } from './create-wish-block.component';

describe('CreateWishModalComponent', () => {
  let component: CreateWishBlockComponent;
  let fixture: ComponentFixture<CreateWishBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateWishBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWishBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

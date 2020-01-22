import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerItemCardComponent } from './seller-item-card.component';

describe('SellerItemCardComponent', () => {
  let component: SellerItemCardComponent;
  let fixture: ComponentFixture<SellerItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

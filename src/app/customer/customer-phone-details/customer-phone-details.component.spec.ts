import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPhoneDetailsComponent } from './customer-phone-details.component';

describe('CustomerPhoneDetailsComponent', () => {
  let component: CustomerPhoneDetailsComponent;
  let fixture: ComponentFixture<CustomerPhoneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPhoneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPhoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersdealsComponent } from './offersdeals.component';

describe('OffersdealsComponent', () => {
  let component: OffersdealsComponent;
  let fixture: ComponentFixture<OffersdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

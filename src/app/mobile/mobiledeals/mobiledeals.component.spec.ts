import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledealsComponent } from './mobiledeals.component';

describe('MobiledealsComponent', () => {
  let component: MobiledealsComponent;
  let fixture: ComponentFixture<MobiledealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiledealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletdealsComponent } from './tabletdeals.component';

describe('TabletdealsComponent', () => {
  let component: TabletdealsComponent;
  let fixture: ComponentFixture<TabletdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

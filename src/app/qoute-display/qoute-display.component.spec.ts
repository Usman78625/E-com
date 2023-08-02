import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteDisplayComponent } from './qoute-display.component';

describe('QouteDisplayComponent', () => {
  let component: QouteDisplayComponent;
  let fixture: ComponentFixture<QouteDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QouteDisplayComponent]
    });
    fixture = TestBed.createComponent(QouteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

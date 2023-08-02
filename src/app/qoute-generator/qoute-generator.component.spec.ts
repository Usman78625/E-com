import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteGeneratorComponent } from './qoute-generator.component';

describe('QouteGeneratorComponent', () => {
  let component: QouteGeneratorComponent;
  let fixture: ComponentFixture<QouteGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QouteGeneratorComponent]
    });
    fixture = TestBed.createComponent(QouteGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

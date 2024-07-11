import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitDetailsComponent } from './circuit-details.component';

describe('CircuitDetailsComponent', () => {
  let component: CircuitDetailsComponent;
  let fixture: ComponentFixture<CircuitDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircuitDetailsComponent]
    });
    fixture = TestBed.createComponent(CircuitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

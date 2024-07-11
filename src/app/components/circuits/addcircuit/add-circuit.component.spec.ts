import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircuitComponent } from './add-circuit.component';

describe('AddCircuitComponent', () => {
  let component: AddCircuitComponent;
  let fixture: ComponentFixture<AddCircuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCircuitComponent]
    });
    fixture = TestBed.createComponent(AddCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

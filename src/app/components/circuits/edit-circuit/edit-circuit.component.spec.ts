import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCircuitComponent } from './edit-circuit.component';

describe('EditCircuitComponent', () => {
  let component: EditCircuitComponent;
  let fixture: ComponentFixture<EditCircuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCircuitComponent]
    });
    fixture = TestBed.createComponent(EditCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

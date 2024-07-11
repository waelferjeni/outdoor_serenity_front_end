import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAgenceComponent } from './espace-agence.component';

describe('EspaceAgenceComponent', () => {
  let component: EspaceAgenceComponent;
  let fixture: ComponentFixture<EspaceAgenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceAgenceComponent]
    });
    fixture = TestBed.createComponent(EspaceAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

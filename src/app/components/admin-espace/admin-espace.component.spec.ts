import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEspaceComponent } from './admin-espace.component';

describe('AdminEspaceComponent', () => {
  let component: AdminEspaceComponent;
  let fixture: ComponentFixture<AdminEspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEspaceComponent]
    });
    fixture = TestBed.createComponent(AdminEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesAdminComponent } from './propiedades-admin.component';

describe('PropiedadesAdminComponent', () => {
  let component: PropiedadesAdminComponent;
  let fixture: ComponentFixture<PropiedadesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropiedadesAdminComponent]
    });
    fixture = TestBed.createComponent(PropiedadesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

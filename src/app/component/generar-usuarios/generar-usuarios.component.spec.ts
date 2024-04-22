import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarUsuariosComponent } from './generar-usuarios.component';

describe('GenerarUsuariosComponent', () => {
  let component: GenerarUsuariosComponent;
  let fixture: ComponentFixture<GenerarUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarUsuariosComponent]
    });
    fixture = TestBed.createComponent(GenerarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

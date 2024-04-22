import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarPropiedadComponent } from './generar-propiedad.component';

describe('GenerarPropiedadComponent', () => {
  let component: GenerarPropiedadComponent;
  let fixture: ComponentFixture<GenerarPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarPropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPefilComponent } from './editar-pefil.component';

describe('EditarPefilComponent', () => {
  let component: EditarPefilComponent;
  let fixture: ComponentFixture<EditarPefilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPefilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPefilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

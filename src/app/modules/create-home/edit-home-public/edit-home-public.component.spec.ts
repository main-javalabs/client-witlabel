import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHomePublicComponent } from './edit-home-public.component';

describe('EditHomePublicComponent', () => {
  let component: EditHomePublicComponent;
  let fixture: ComponentFixture<EditHomePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHomePublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHomePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

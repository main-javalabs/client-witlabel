import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuHomeComponent } from './edit-menu-home.component';

describe('EditMenuHomeComponent', () => {
  let component: EditMenuHomeComponent;
  let fixture: ComponentFixture<EditMenuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMenuHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMenuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

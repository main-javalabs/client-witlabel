import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingComComponent } from './floating-com.component';

describe('FloatingComComponent', () => {
  let component: FloatingComComponent;
  let fixture: ComponentFixture<FloatingComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

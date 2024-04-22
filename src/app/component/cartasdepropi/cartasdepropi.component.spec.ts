import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasdepropiComponent } from './cartasdepropi.component';

describe('CartasdepropiComponent', () => {
  let component: CartasdepropiComponent;
  let fixture: ComponentFixture<CartasdepropiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartasdepropiComponent]
    });
    fixture = TestBed.createComponent(CartasdepropiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

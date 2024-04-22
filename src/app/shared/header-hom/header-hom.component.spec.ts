import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomComponent } from './header-hom.component';

describe('HeaderHomComponent', () => {
  let component: HeaderHomComponent;
  let fixture: ComponentFixture<HeaderHomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderHomComponent]
    });
    fixture = TestBed.createComponent(HeaderHomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

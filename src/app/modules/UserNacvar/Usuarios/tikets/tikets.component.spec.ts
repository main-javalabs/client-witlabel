import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketsComponent } from './tikets.component';

describe('TiketsComponent', () => {
  let component: TiketsComponent;
  let fixture: ComponentFixture<TiketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiketsComponent]
    });
    fixture = TestBed.createComponent(TiketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

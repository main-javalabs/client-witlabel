import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCreaHomeComponent } from './header-crea-home.component';

describe('HeaderCreaHomeComponent', () => {
  let component: HeaderCreaHomeComponent;
  let fixture: ComponentFixture<HeaderCreaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCreaHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCreaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenHolderComponent } from './token-holder.component';

describe('TokenHolderComponent', () => {
  let component: TokenHolderComponent;
  let fixture: ComponentFixture<TokenHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenHolderComponent]
    });
    fixture = TestBed.createComponent(TokenHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensRecibirComponent } from './tokens-resibir.component';

describe('TokensResibirComponent', () => {
  let component: TokensRecibirComponent;
  let fixture: ComponentFixture<TokensRecibirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokensRecibirComponent]
    });
    fixture = TestBed.createComponent(TokensRecibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensCompradosComponent } from './tokens-comprados.component';

describe('TokensCompradosComponent', () => {
  let component: TokensCompradosComponent;
  let fixture: ComponentFixture<TokensCompradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokensCompradosComponent]
    });
    fixture = TestBed.createComponent(TokensCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenvendidoComponent } from './tokenvendido.component';

describe('TokenvendidoComponent', () => {
  let component: TokenvendidoComponent;
  let fixture: ComponentFixture<TokenvendidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenvendidoComponent]
    });
    fixture = TestBed.createComponent(TokenvendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

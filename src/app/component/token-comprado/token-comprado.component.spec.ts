import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCompradoComponent } from './token-comprado.component';

describe('TokenCompradoComponent', () => {
  let component: TokenCompradoComponent;
  let fixture: ComponentFixture<TokenCompradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenCompradoComponent]
    });
    fixture = TestBed.createComponent(TokenCompradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

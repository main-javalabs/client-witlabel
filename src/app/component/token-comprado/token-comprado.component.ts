import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token-comprado',
  templateUrl: './token-comprado.component.html',
  styleUrls: ['./token-comprado.component.css']
})
export class TokenCompradoComponent {
  @Input() portfolioTitle: string | undefined;
  @Input() portfolioValue: string | undefined;
  @Input() portfolioLabelText: string | undefined;

  constructor() {}
}

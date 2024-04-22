import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tokens-comprados',
  templateUrl: './tokens-comprados.component.html',
  styleUrls: ['./tokens-comprados.component.css']
})
export class TokensCompradosComponent {
  @Input() propertyName: string | undefined ;
  @Input() propertyDescription: string | undefined ;
  @Input() propertyPrice: string | undefined ;
  @Input() priceDescription: string | undefined ;
  @Input() rentabilityTitle: string | undefined ;
  @Input() rentabilityDescription: string | undefined ;
  @Input() imageUrl: string | undefined ;
}

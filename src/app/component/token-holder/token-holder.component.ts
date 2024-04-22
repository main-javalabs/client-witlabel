import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token-holder',
  templateUrl: './token-holder.component.html',
  styleUrls: ['./token-holder.component.css']
})
export class TokenHolderComponent {

  @Input() propertyName: string | undefined;
  @Input() addressText: string | undefined;
  @Input() tokenPrice: string | undefined;
  @Input() tokensBoughtText: string | undefined;
  @Input() misTokens: string | undefined;
  @Input() rentabilidadEstimada: string | undefined;
  @Input() rendimientosAcumulados: string | undefined;
  @Input() imageUrl: string | undefined;

}

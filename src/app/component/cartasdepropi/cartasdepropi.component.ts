import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-cartasdepropi',
  templateUrl: './cartasdepropi.component.html',
  styleUrls: ['./cartasdepropi.component.css']
})
export class CartasdepropiComponent {

  @Input() disponible: string | undefined;
  @Input() mensajeAdicional: string | undefined;
  @Input() mensajeTokens: string | undefined;
  @Input() direccion: string | undefined;
  @Input() inversionPorToken: string | undefined;
  @Input() inversionTotal: string | undefined;
  @Input() rentabilidadEstimada: string | undefined;
  @Input() urlImagenFondo: string | undefined;
}

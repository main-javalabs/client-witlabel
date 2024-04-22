import { Component } from '@angular/core';

@Component({
  selector: 'app-tokens-resibir',
  templateUrl: './tokens-resibir.component.html',
  styleUrls: ['./tokens-resibir.component.css']
})
export class TokensRecibirComponent {
  datos = [
    { id: 1, token: 'Ethereum', direccionToken: '0x123abc...', oracle: 'Chainlink', direccionOracle: '0x456def...', tipo: 'ERC-20', activo: true },
    { id: 2, token: 'Binance Coin', direccionToken: '0x789ghi...', oracle: 'Band Protocol', direccionOracle: '0x012jkl...', tipo: 'BEP-20', activo: false }
  ];
}

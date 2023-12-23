import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apuesta',
  standalone: true,
  imports: [],
  templateUrl: './apuesta.component.html',
  styleUrl: './apuesta.component.css',
})
export class ApuestaComponent {
  contador = 0;
  @Input() numero = 0;
  aumentarContador() {
    this.contador++;
  }
}

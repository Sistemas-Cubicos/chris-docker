import { Component } from '@angular/core';

@Component({
  selector: 'app-etiqueta-tienda-batch-milan',
  templateUrl: './etiqueta-tienda-batch-milan.component.html',
  styleUrls: ['./etiqueta-tienda-batch-milan.component.scss']
})
export class EtiquetaTiendaBatchMilanComponent {
  logoUrl: string = 'assets/icons/sim-logo.png';
  producto: string = 'Sofá Milan';
  descripcion: string = 'Sofá de 3 plazas, tela gris, patas de madera.';
  precio: string = '$849.99';
  descuento: string = '28%';
  precioFinal: string = '$599.99';
}

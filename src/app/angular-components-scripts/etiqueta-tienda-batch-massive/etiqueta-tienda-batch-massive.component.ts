import { Component } from '@angular/core';

@Component({
  selector: 'app-etiqueta-tienda-batch-massive',
  templateUrl: './etiqueta-tienda-batch-massive.component.html',
  styleUrls: ['./etiqueta-tienda-batch-massive.component.scss']
})
export class EtiquetaTiendaBatchMassiveComponent {
logoUrl = 'assets/logomassiv.png';
barcodeUrl = 'assets/barcode.png';
etiqueta = {
  clave: '12345',
  precio: '$100.00',
  producto: 'Producto Demo',
  descripcion: 'Descripción de ejemplo'
};}

import { Component } from '@angular/core';

@Component({
  selector: 'app-etiqueta-tienda-batch',
  templateUrl: './etiqueta-tienda-batch.component.html',
  styleUrls: ['./etiqueta-tienda-batch.component.scss']
})
export class EtiquetaTiendaBatchComponent {
barcodeUrl = 'assets/barcode.png';
etiqueta = {
  clave: '12345',
  precio: '$100.00',
  producto: 'Producto Demo',
  descripcion: 'Descripción de ejemplo'
};}

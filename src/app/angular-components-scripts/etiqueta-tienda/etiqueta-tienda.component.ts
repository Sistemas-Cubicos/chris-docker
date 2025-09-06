import { Component } from '@angular/core';

@Component({
  selector: 'app-etiqueta-tienda',
  templateUrl: './etiqueta-tienda.component.html',
  styleUrls: ['./etiqueta-tienda.component.scss']
})
export class EtiquetaTiendaComponent {
barcodeUrl = 'assets/barcode.png';
etiqueta = {
  clave: '12345',
  precio: '$100.00',
  producto: 'Producto Demo',
  descripcion: 'Descripción de ejemplo'
};}

import { Component } from '@angular/core';

@Component({
  selector: 'app-etiqueta-producto',
  templateUrl: './etiqueta-producto.component.html',
  styleUrls: ['./etiqueta-producto.component.scss']
})
export class EtiquetaProductoComponent {
  logoUrl: string = 'assets/icons/sim-logo.png';
  resource = {
    FolioProduccion: 'FP-2025-001',
    FechaProduccion: '2025-09-01',
    FechaCompra2: '2025-08-25',
    FechaEntrega: '2025-09-05',
    Cliente1: 'Juan Pérez',
    FolioVenta1: 'FV-2025-123',
    Clave: 'PRD-456',
    Producto1: 'Silla Ergonómica',
    Descripcion1: 'Silla ergonómica de oficina, color negro, base metálica.'
  };
}
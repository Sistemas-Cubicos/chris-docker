import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-factura-cfdi',
  templateUrl: './ticket-factura-cfdi.component.html',
  styleUrls: ['./ticket-factura-cfdi.component.scss']
})
export class TicketFacturaCFDIComponent {
  imagenLogo: string = 'assets/icons/sim-logo.png';
  razonEmpresa: string = 'Empresa Ejemplo S.A. de C.V.';
  rfcEmpresa: string = 'EJE123456789';
  regimenEmpresa: string = 'General de Ley Personas Morales';
  direccionEmpresa: string = 'Av. Reforma 123, CDMX';
  coloniaEmpresa: string = 'Centro';
  delegacionEmpresa: string = 'Cuauhtémoc';
  estadoEmpresa: string = 'CDMX';
  folio: string = 'F-2025-001';
  serie: string = 'A';
  folioInterno: string = 'FI-2025-001';
  fechaEmision: string = '2025-09-04';
  fechaCertificacion: string = '2025-09-04';
  folioFiscal: string = 'FF-2025-001';
  certificado: string = '00001000000403258748';
  serieCertificadoSAT: string = '00001000000403258748';
  tipoComprobante: string = 'Ingreso';
  formaPago: string = 'Efectivo';
  metodoPago: string = 'PUE';
  razonCliente: string = 'Juan Pérez';
  rfcCliente: string = 'JUAP890123HDF';
  direccionCliente: string = 'Calle Falsa 123';
  coloniaCliente: string = 'Col. Ficticia';
  delegacionCliente: string = 'Benito Juárez';
  estadoCliente: string = 'CDMX';
  direccionSucursal: string = 'Sucursal Centro';
  coloniaSucursal: string = 'Centro';
  delegacionSucursal: string = 'Cuauhtémoc';
  estadoSucursal: string = 'CDMX';
  cantidad: string = '1';
  modelo: string = 'Silla Ergonómica';
  precio: string = '$1,200.00';
  total: string = '$1,200.00';
  items = [
    { cantidad: '1', modelo: 'Silla Ergonómica', precio: '$1,200.00', total: '$1,200.00' },
    { cantidad: '2', modelo: 'Mesa de Centro', precio: '$800.00', total: '$1,600.00' }
  ];
  subtotal: string = '$2,800.00';
  descuento: string = '$0.00';
  iva: string = '$448.00';
  retencion: string = '$0.00';
  totalGeneral: string = '$3,248.00';
  montoLetra: string = 'Tres mil doscientos cuarenta y ocho pesos 00/100 M.N.';
  cadenaOriginal: string = 'Cadena original de certificación digital';
  selloCFDI: string = 'SELLOCFDI1234567890';
  selloSAT: string = 'SELLOSAT0987654321';
  imagenCodigo: string = 'assets/icons/sim-codigo.png';
}

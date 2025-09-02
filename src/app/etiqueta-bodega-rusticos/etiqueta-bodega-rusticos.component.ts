import { Component } from '@angular/core';

@Component({
  selector: 'app-etiqueta-bodega-rusticos',
  
  templateUrl: './etiqueta-bodega-rusticos.component.html',
  styleUrls: ['./etiqueta-bodega-rusticos.component.scss']
})
export class EtiquetaBodegaRusticosComponent {
  // Propiedades visuales
  imagenProducto: string = 'assets/img/producto-default.png';
  imagenLogo: string = 'assets/img/logo-default.png';
  imagenMexico: string = '';
  imagenFlechaArriba: string = '';
  imagenCodigoBarras: string = 'assets/img/codigo-barras-default.png';

  // Propiedades de datos
  noPedidoProveedor: string = '';
  nombreProducto: string = '';
  color: string = '';
  clave: string = '';

  // Propiedades de control
  cantidad: number = 0;
  cambiarDatos: boolean = false;
  orden: number = 0;
  datosEtiquetas: DatosEtiquetaBodegaRusticos[] = [];
  idUsuario: number = 0;

  get maxProductos(): number {
    return this.datosEtiquetas.length;
  }

  constructor() {
    // Simulación de datos iniciales
    this.inicializar(1, [
      { Calve: 'ABC-123', Color: 'Madera', Pedido: '123456', Producto: 'Producto de Ejemplo', Cantidad: 10, IdProducto: 101 }
    ], 0);
  }

  inicializar(id: number, listPedidos: PedidosProductosEtiquetas[], idOrdenEntrega: number) {
    this.idUsuario = id;
    // Simulación de obtención de datos
    if (idOrdenEntrega !== 0) {
      // Simular datos de confirmación
      this.datosEtiquetas = [
        { Calve: 'CONF-001', Color: 'Nogal', Pedido: '654321', Producto: 'Producto Confirmado', Cantidad: 5, IdProducto: 201 }
      ];
    } else {
      // Simular datos de recepción
      this.datosEtiquetas = listPedidos.map(p => ({
        Calve: p.Calve,
        Color: p.Color,
        Pedido: p.Pedido,
        Producto: p.Producto,
        Cantidad: p.Cantidad,
        IdProducto: p.IdProducto
      }));
    }
    this.orden = 0;
    this.cargarInformacion();
    this.obtenerLogoEmpresaPorUsuario();
  }

  cargarInformacion() {
    if (this.datosEtiquetas.length === 0) return;
    const datos = this.datosEtiquetas[this.orden];
    this.clave = datos.Calve;
    this.color = datos.Color;
    this.noPedidoProveedor = datos.Pedido;
    this.nombreProducto = datos.Producto;
    this.cantidad = datos.Cantidad;
    this.obtenerBarCode(this.clave);
    this.obtenerImagenProducto(datos.IdProducto);
    this.cambiarDatos = false;
  }

  obtenerLogoEmpresaPorUsuario() {
    // Simulación: asignar imagen por usuario
    this.imagenLogo = 'assets/img/logo-default.png';
  }

  obtenerImagenProducto(idProducto: number) {
    // Simulación: asignar imagen por producto
    this.imagenProducto = 'assets/img/producto-default.png';
  }

  obtenerBarCode(clave: string) {
    // Simulación: asignar imagen de código de barras
    this.imagenCodigoBarras = 'assets/img/codigo-barras-default.png';
  }
}

// Interfaces simuladas para los datos
interface DatosEtiquetaBodegaRusticos {
  Calve: string;
  Color: string;
  Pedido: string;
  Producto: string;
  Cantidad: number;
  IdProducto: number;
}

interface PedidosProductosEtiquetas {
  Calve: string;
  Color: string;
  Pedido: string;
  Producto: string;
  Cantidad: number;
  IdProducto: number;
}

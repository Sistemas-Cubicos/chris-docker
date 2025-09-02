import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface EtiquetaBodega {
  descripcion: string;
  producto: string;
  clave: string;
  precio: string;
  cliente: string;
  folioVenta: string;
  serie: string;
  ubicacion: string;
  direccion: string;
  fechaCompra: string;
  fechaEntrega: string;
}

@Component({
  selector: 'app-etiqueta-bodega',
  templateUrl: './etiqueta-bodega.component.html',
  styleUrls: ['./etiqueta-bodega.component.scss'],
})
export class EtiquetaBodegaComponent implements OnInit {
 @Input() mostrar: boolean = false;
 @Output() cerrar = new EventEmitter<void>();
 @Input() etiquetas: EtiquetaBodega[] = [
  {
    descripcion: 'Sillón reclinable de 3 plazas, color chocolate',
    producto: 'Sofá Reclinable 3P',
    clave: 'SF-RECL-3P',
    precio: '$8,499.00',
    cliente: 'Luis Hernández',
    folioVenta: 'FV-2001',
    serie: 'SR-001',
    ubicacion: 'Bodega M1',
    direccion: 'Av. Juárez 123, Guadalajara, JAL',
    fechaCompra: '2025-08-12',
    fechaEntrega: '2025-08-18'
  },
  {
    descripcion: 'Comedor de madera sólida para 6 personas',
    producto: 'Comedor Encino 6P',
    clave: 'CMD-EN6P',
    precio: '$12,999.00',
    cliente: 'Ana Ramírez',
    folioVenta: 'FV-2002',
    serie: 'SR-002',
    ubicacion: 'Bodega M2',
    direccion: 'Calle Hidalgo 456, León, GTO',
    fechaCompra: '2025-08-13',
    fechaEntrega: '2025-08-20'
  },
  {
    descripcion: 'Cama matrimonial con base tapizada y cabecera',
    producto: 'Cama Matrimonial Plus',
    clave: 'CAM-MTP',
    precio: '$7,499.00',
    cliente: 'Marcos Pérez',
    folioVenta: 'FV-2003',
    serie: 'SR-003',
    ubicacion: 'Bodega M3',
    direccion: 'Blvd. Independencia 89, Torreón, COAH',
    fechaCompra: '2025-08-14',
    fechaEntrega: '2025-08-21'
  },
  {
    descripcion: 'Closet modular de 4 puertas, color nogal',
    producto: 'Closet Nogal 4P',
    clave: 'CLS-NGL4P',
    precio: '$9,299.00',
    cliente: 'Beatriz González',
    folioVenta: 'FV-2004',
    serie: 'SR-004',
    ubicacion: 'Bodega M4',
    direccion: 'Av. Universidad 321, Puebla, PUE',
    fechaCompra: '2025-08-15',
    fechaEntrega: '2025-08-22'
  },
  {
    descripcion: 'Cama matrimonial con base tapizada y cabecera',
    producto: 'Cama Matrimonial Plus',
    clave: 'CAM-MTP',
    precio: '$7,499.00',
    cliente: 'Marcos Pérez',
    folioVenta: 'FV-2003',
    serie: 'SR-003',
    ubicacion: 'Bodega M3',
    direccion: 'Blvd. Independencia 89, Torreón, COAH',
    fechaCompra: '2025-08-14',
    fechaEntrega: '2025-08-21'
  },
  {
    descripcion: 'Cama matrimonial con base tapizada y cabecera',
    producto: 'Cama Matrimonial Plus',
    clave: 'CAM-MTP',
    precio: '$7,499.00',
    cliente: 'Marcos Pérez',
    folioVenta: 'FV-2003',
    serie: 'SR-003',
    ubicacion: 'Bodega M3',
    direccion: 'Blvd. Independencia 89, Torreón, COAH',
    fechaCompra: '2025-08-14',
    fechaEntrega: '2025-08-21'
  },
  {
    descripcion: 'Cama matrimonial con base tapizada y cabecera',
    producto: 'Cama Matrimonial Plus',
    clave: 'CAM-MTP',
    precio: '$7,499.00',
    cliente: 'Marcos Pérez',
    folioVenta: 'FV-2003',
    serie: 'SR-003',
    ubicacion: 'Bodega M3',
    direccion: 'Blvd. Independencia 89, Torreón, COAH',
    fechaCompra: '2025-08-14',
    fechaEntrega: '2025-08-21'
  },
];


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Simulación: los datos ya están asignados arriba
  }

Print() {
  const elemento = document.querySelector('.etiqueta-bodega-root');
  const contenido = elemento ? elemento.innerHTML : '';

  const ventana = window.open('', '', 'height=600,width=800');

  if (ventana && contenido) {
    ventana.document.write('<html><head><title>Imprimir</title></head><body>');
    ventana.document.write(`<style> 
      .etiqueta-bodega-root {
  position: fixed;
flex-direction: column;
  width:  93% ;
  height: auto;
   max-height: 87vh; 
  background: rgb(255, 255, 255);
  z-index: 999;
  font-family: Verdana, Arial, sans-serif;
  color: black;
  border: 2px solid rgb(48, 47, 47);
  padding: 2rem;
  border-radius: 8px; 
  overflow: hidden;                                                                                    
}


.etiqueta-bodega-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  height: auto;
  width: 20rem;
}
.etiqueta-bodega-col {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  
}
      .logo {
  width: 130px;
  height: 65px;
  object-fit: contain;
  margin: 0 auto 2px auto;
}
.codigo-barras {
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin: 0 auto 2px auto;
}
.codigo-barras2 {
  width: 150px;
  height: 50px;
  object-fit: contain;
  margin-left: 10px;
}
.texto {
  margin-right: 5px;
}
.texto1 {
  font-size: 10px;
  font-family: Verdana, Arial, sans-serif;
}
.texto2 {
  font-size: 10px;
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
}.etiquetas-scroll {
  display: grid;
  flex: 1;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 16px;                /* espacio entre etiquetas */
  
  max-height: 70vh;         
  
  padding: 1rem;

  padding-right: 8px; 
}

.etiquetas-scroll::-webkit-scrollbar {
  width: 8px;
}

.etiquetas-scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.etiquetas-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}


.precio {
  text-align: right;
  width: 70px;
}
.etiqueta-bodega-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  background: #fdfdfd;
  
  /* evita que se corten entre páginas */
  page-break-inside: avoid;
  break-inside: avoid;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  
} @media print {
  .btn-print,
  .titulo,
  .close-btn {
    display: none !important;
  }</style>`);
    ventana.document.write(contenido);
    ventana.document.write('</body></html>');
    ventana.document.close();
       ventana.focus();

    // onafterprint antes de print
    ventana.onafterprint = () => ventana.close(), this.cerrarModal();

    // fallback por si no dispara onafterprint
    setTimeout(() => {
      if (!ventana.closed) ventana.close();
    }, 1000);

    ventana.print();
    

   }
}


  cerrarModal() {
    this.cerrar.emit(); // avisa al padre que se cierre
  }

}

import { Component } from '@angular/core';
import { EtiquetaBodegaRusticosComponent } from './etiqueta-bodega-rusticos/etiqueta-bodega-rusticos.component';
import { EtiquetaBodegaComponent } from './etiqueta-bodega-component/etiqueta-bodega.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  mostrarModal = false;

  verModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
 
  

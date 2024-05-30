import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-form',
  templateUrl: './resumen-form.component.html',
  styleUrls: ['./resumen-form.component.css']
})
export class ResumenFormComponent {

  title = 'Resumen';
  data = {
    resumen: '',
    website: '',
    sector: '',
    tamano: '',
    presupuestoActual: 0,
    presupuestoAnterior: 0,
    presupuestoIT: 0,
    retos: ''
  }
  constructor() { }


}

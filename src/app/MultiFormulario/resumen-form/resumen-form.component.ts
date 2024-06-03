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
    presupuestoActual: NaN,
    presupuestoAnterior: NaN,
    presupuestoIT: NaN,
    retos: ''
  };

  saveData(){
    console.log(this.data);
  }
}

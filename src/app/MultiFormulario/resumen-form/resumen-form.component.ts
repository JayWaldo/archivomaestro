import { Component, Input } from '@angular/core';
import { IResumen } from '../Modelos';

@Component({
  selector: 'app-resumen-form',
  templateUrl: './resumen-form.component.html',
  styleUrls: ['./resumen-form.component.css']
})
export class ResumenFormComponent {

  title = 'Resumen';
  @Input() data : IResumen = {
    resumen: '',
    website: '',
    sector: '',
    tamano: '',
    presupuestoActual: 0,
    presupuestoAnterior: 0,
    presupuestoIT: 0,
    retos: ''
  };

  saveData(){
    console.log(this.data);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ISeguridadFisica } from '../Modelos';

@Component({
  selector: 'app-seguridad-fisica-form',
  templateUrl: './seguridad-fisica-form.component.html',
  styleUrls: ['./seguridad-fisica-form.component.css']
})
export class SeguridadFisicaFormComponent{
  title = 'Seguridad Fisica'
  facturaList = [
    '',
    'luis',
    'pedro',
    'Juan',
    'Yo mismo alv',
    'Tu jefa'
  ]
  @Input() data : ISeguridadFisica = {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    c2c3c4c5: 0,
    Videdovigilancia: 0,
    ControlAccesos: 0
  }

  saveData(){
    console.log(this.data);
  }
}

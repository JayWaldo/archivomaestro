import { Component, OnInit } from '@angular/core';

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
  data = {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    c2c3c4c5: NaN,
    Videdovigilancia: NaN,
    ControlAccesos: NaN
  }

  saveData(){
    console.log(this.data);
  }
}

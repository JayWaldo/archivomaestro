import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciberseguridad-form',
  templateUrl: './ciberseguridad-form.component.html',
  styleUrls: ['./ciberseguridad-form.component.css']
})
export class CiberseguridadFormComponent{
  title = 'Ciberseguridad'
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
    SOCass: NaN,
    SASE: NaN,
    ISA: NaN,
    XDR: NaN,
    Consultoria: NaN
  }

  saveData(){
    console.log(this.data);
  }
}

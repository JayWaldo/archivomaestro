import { Component, Input, OnInit } from '@angular/core';
import { ICiberseguridad } from '../Modelos';

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
  @Input() data:ICiberseguridad = {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    SOCass: 0,
    SASE: 0,
    ISA: 0,
    XDR: 0,
    Consultoria: 0
  }

  saveData(){
    console.log(this.data);
  }
}

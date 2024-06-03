import { Component, Input, OnInit } from '@angular/core';
import { Iinfraestructura } from '../Modelos';

@Component({
  selector: 'app-infraestructura-form',
  templateUrl: './infraestructura-form.component.html',
  styleUrls: ['./infraestructura-form.component.css']
})
export class InfraestructuraFormComponent{
  title = 'Infraestructura'
  facturaList = [
    '',
    'luis',
    'pedro',
    'Juan',
    'Yo mismo alv',
    'Tu jefa'
  ]

  @Input() data : Iinfraestructura = {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    redWanLan: 0,
    redSDWan: 0,
    redWifi: 0,
    redGpon: 0
  }

  saveData(){
    console.log(this.data);
  }
}

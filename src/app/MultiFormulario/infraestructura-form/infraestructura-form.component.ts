import { Component, OnInit } from '@angular/core';

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

  data = {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    redWanLan: NaN,
    redSDWan: NaN,
    redWifi: NaN,
    redGpon: NaN
  }

  saveData(){
    console.log(this.data);
  }
}

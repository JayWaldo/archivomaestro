import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-center-form',
  templateUrl: './data-center-form.component.html',
  styleUrls: ['./data-center-form.component.css']
})
export class DataCenterFormComponent{
  title = 'Data Center'
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
    Colocacion: NaN,
    InfraPremisas: NaN,
    Nube: NaN
  }

  saveData(){
    console.log(this.data);
  }
}

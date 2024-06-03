import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iaform',
  templateUrl: './iaform.component.html',
  styleUrls: ['./iaform.component.css']
})
export class IAFormComponent{
  title = 'Inteligencia Artificial'
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
    IA: NaN
  }

  saveData(){
    console.log(this.data);
  }
}

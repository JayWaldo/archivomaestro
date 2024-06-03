import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboracion-form',
  templateUrl: './colaboracion-form.component.html',
  styleUrls: ['./colaboracion-form.component.css']
})
export class ColaboracionFormComponent{
  title = 'Colaboracion'
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
    PBXpremisas: NaN,
    PBXaasNube: NaN,
    UCaas: NaN
  }

  saveData(){
    console.log(this.data);
  }
}

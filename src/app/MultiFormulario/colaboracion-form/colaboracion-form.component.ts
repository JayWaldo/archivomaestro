import { Component, Input, OnInit } from '@angular/core';
import { IColaboracion } from '../Modelos';

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
    'Juan'
  ]
  @Input() data : IColaboracion = {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    PBXpremisas: 0,
    PBXaasNube: 0,
    UCaas: 0
  }

  saveData(){
    console.log(this.data);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { IDataCenter } from '../Modelos';

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
    'Juan'
  ]
  @Input() data : IDataCenter = {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    Colocacion: 0,
    InfraPremisas: 0,
    Nube: 0
  }

  saveData(){
    console.log(this.data);
  }
}

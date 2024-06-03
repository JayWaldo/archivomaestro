import { Component, Input, OnInit } from '@angular/core';
import { IinteligenciaArtificial } from '../Modelos';

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
    'Juan'
  ]
  @Input() data : IinteligenciaArtificial= {
    presentoCliente : false,
    facturaConNosotros: false,
    facturaOtro: '',
    IA: 0
  }

  saveData(){
    console.log(this.data);
  }
}

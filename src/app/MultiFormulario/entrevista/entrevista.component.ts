import { Component, Input, OnInit } from '@angular/core';
import { IEntrevista } from '../Modelos';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {

  title = 'Entrevista'
  dropOpciones : {[key: string]: string[]}= {
    'tipoCandidato': ['NUEVO', 'REINGRESO', 'INDEPENDIENTE'],
    'tipoEntrevista': ['PRESENCIAL', 'VIRTUAL', 'TELEFONICA'],
    'estatusEntrevista': ['ACEPTADO', 'RECHAZADO', 'NO SE PRESENTO'],
    'validacionSindicato': ['ACEPTADO', 'RECHAZADO', 'NO SE PRESENTO', 'NO APLICA EN ESTE PUESTO']
  }
  @Input() data : IEntrevista = {
    citaEntrevista : false,
    fechaPrimerEntrevista : new Date(),
    tipoCandidato: '',
    tipoEntrevista: '',
    estatusPrimerEntrevista: '',
    nombreSupervisor: '',
    estatusSegundaEntrevista: '',
    validacionSindicato: ''
  }

  constructor() { }
  ngOnInit(): void {
  }

  getOpciones(grupo: string){
    return this.dropOpciones[grupo];
  }
  saveData(){
    console.log(this.data);
  }
}

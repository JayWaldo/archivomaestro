import { Component, Input, OnInit } from '@angular/core';
import { IEntrevista } from '../Modelos';
import { EntrevistaService } from 'src/app/services/entrevista.service';
import { CandidatoService } from 'src/app/services/candidato.service';

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
    idCandidato: 0,
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
    const fechaEntrevista = this.formatDate(this.data.fechaPrimerEntrevista);
    this.data.fechaPrimerEntrevista = new Date(fechaEntrevista);
    console.log(this.data);
  }
  formatDate(date: any): string {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return '';
    const day = parsedDate.getDate().toString().padStart(2, '0');
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

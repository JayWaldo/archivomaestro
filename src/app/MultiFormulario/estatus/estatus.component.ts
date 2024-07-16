import { Component, Input, OnInit } from '@angular/core';
import { IEstatus } from '../Modelos';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.css']
})
export class EstatusComponent implements OnInit {

  title = 'Estatus'
  isCompleted: boolean = true;
  dropOPciones = [
    'DECLINO POR MEJOR OFERTA ECONOMICA',
    'NO APRUEBA PSICOMETRIAS',
    'DEJO DE RESPONDER',
    'NO QUEDO POR DISTANCIA',
    'NO APRUEBA MEDICO',
    'NO ENTREGO DOCUMENTOS COMPLETOS',
    'CONTRATADO',
    'PROCESO EN PAUSA',
    'NO INICIO PROCESO',
    'PROBLEMAS DE HORARIOS',
    'PROBLEMAS CON BANCOS',
    'FAMILIARES EN LA EMPRESA',
    'CSF NO ACTUALIZADA',
    'REINGRESO NO VIABLE',
    'VACANTE DETENIDA',
    'NO TIENE EQUIPO COMPATIBLE CON APK'
  ]
  @Input() data : IEstatus= {
    estatusGeneral : ''
  }
  constructor() { }
  ngOnInit(): void {
  }

  saveData(){
    console.log(this.data);
  }
}

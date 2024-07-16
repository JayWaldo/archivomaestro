import { Component, Input, OnInit } from '@angular/core';
import { IAlta } from '../Modelos';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  title = 'Alta'
  isCompleted: boolean = false;

  @Input() data : IAlta = {
    fechCierreFolio: new Date(),
    fechaIngreso: new Date(),
    promDiasCobertura: 0,
  }
  constructor() { }
  ngOnInit(): void {
  }

  saveData(){
    const fechaCierre = this.formatDate(this.data.fechCierreFolio);
    const fechaIngreso = this.formatDate(this.data.fechaIngreso);
    this.data.fechCierreFolio = fechaCierre;
    this.data.fechaIngreso = fechaIngreso;
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

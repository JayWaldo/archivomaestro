import { Component, Input, OnInit } from '@angular/core';
import { IAlta } from '../Modelos';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  title = 'Alta'
  @Input() data : IAlta = {
    fechCierreFolio: new Date(),
    fechaINgreso: new Date(),
    promDiasCobertura: 0,
  }
  constructor() { }
  ngOnInit(): void {
  }

  saveData(){
    console.log(this.data);
  }
}

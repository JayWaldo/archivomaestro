import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraestructura-form',
  templateUrl: './infraestructura-form.component.html',
  styleUrls: ['./infraestructura-form.component.css']
})
export class InfraestructuraFormComponent implements OnInit {
  title = 'Infraestructura'
  facturaList = [
    'luis',
    'pedro',
    'Juan',
    'Yo mismo alv',
    'Tu jefa'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

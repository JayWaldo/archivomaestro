import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad-fisica-form',
  templateUrl: './seguridad-fisica-form.component.html',
  styleUrls: ['./seguridad-fisica-form.component.css']
})
export class SeguridadFisicaFormComponent implements OnInit {
  title = 'Seguridad Fisica'
  facturaList = [
    '',
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciberseguridad-form',
  templateUrl: './ciberseguridad-form.component.html',
  styleUrls: ['./ciberseguridad-form.component.css']
})
export class CiberseguridadFormComponent implements OnInit {
  title = 'Ciberseguridad'
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

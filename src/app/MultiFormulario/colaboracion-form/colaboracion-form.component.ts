import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboracion-form',
  templateUrl: './colaboracion-form.component.html',
  styleUrls: ['./colaboracion-form.component.css']
})
export class ColaboracionFormComponent implements OnInit {
  title = 'Colaboracion'
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

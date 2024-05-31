import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iaform',
  templateUrl: './iaform.component.html',
  styleUrls: ['./iaform.component.css']
})
export class IAFormComponent implements OnInit {
  title = 'Inteligencia Artificial'
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

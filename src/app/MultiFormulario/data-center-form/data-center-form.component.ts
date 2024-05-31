import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-center-form',
  templateUrl: './data-center-form.component.html',
  styleUrls: ['./data-center-form.component.css']
})
export class DataCenterFormComponent implements OnInit {
  title = 'Data Center'
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

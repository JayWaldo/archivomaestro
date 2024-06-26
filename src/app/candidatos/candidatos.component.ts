import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import { CandidatoData } from '../fakedata/dbTemporal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  title = 'Candidatos';
  candidatosList: CandidatoData[] = [];
  suscripcion?: Subscription;

  constructor(private servicio: SharedService, private router: Router) { }
  ngOnInit(): void {
    this.suscripcion = this.servicio.data$.subscribe(data => {
      this.candidatosList.push(data);
    })

    console.log(this.candidatosList);
  }

  goToRegistro(){
    this.router.navigate(['/registro']);
  }
}

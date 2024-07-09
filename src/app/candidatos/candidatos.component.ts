import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import { CandidatoData } from '../fakedata/dbTemporal';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { RHService } from '../services/rh.service';
import { CandidatoService } from '../services/candidato.service';
import { ICandidato, IRH } from '../MultiFormulario/Modelos';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', [
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class CandidatosComponent implements OnInit, AfterViewInit {

  title = 'Candidatos';
  currentUser ?: IRH;
  candidatosList: ICandidato[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private rhService: RHService,
    private candidatoService: CandidatoService) { }
  ngOnInit(): void {
    this.fetchRHInfo();
  }
  ngAfterViewInit(): void {
  }

  fetchRHInfo(){
    const email = this.authService.getEmail()
    if(email !== null){
      this.rhService.getRHinfo(email).subscribe(
        (rh: IRH) => {
          this.currentUser = rh;
          this.cargarCandidatos(rh.idUsuarioRH);
        },
        (error) => {
          console.error('Error al traer informacion ' + error);
        }
      )
    } else {
      console.error('Correo electronico no encontrado en localStorage.');
    }
  }

  cargarCandidatos(rhId: number): void{
    this.candidatoService.getCandidatos(rhId).subscribe(
      (candidatos: ICandidato[]) => {
        this.candidatosList = candidatos;
      }, (error) => {
        console.error('Error al cargar candidatos: ' + error);
      }
    );
  }

  goToRegistro(){
    this.router.navigate(['/registro']);
  }

  editarRegistro(index:number){

  }
  eliminarRegistro(index:number){
    if(index > -1 && index < this.candidatosList.length){
      this.candidatosList.splice(index, 1);
    }
  }
}

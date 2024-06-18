import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private fuenteSubject = new BehaviorSubject<string>('');
  fuente$ = this.fuenteSubject.asObservable();

  actualizarFuente(nuevaFuente: string){
    this.fuenteSubject.next(nuevaFuente);
  }
  enviarFuente(){
    return this.fuenteSubject;
  }
  constructor() { }
}

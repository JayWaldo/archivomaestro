import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IPsicometriasEvaluacion } from '../MultiFormulario/Modelos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsicometriasService {
  private api = 'https://localhost:7153';

  constructor(
    private http: HttpClient, 
    private authService: AuthService,
  ) { }

  getPsicometrias(): Observable<IPsicometriasEvaluacion>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.api}/psicometrias`;
    return this.http.get<IPsicometriasEvaluacion>(url);
  }

  addPsicometrias(psicometrias: IPsicometriasEvaluacion): Observable<IPsicometriasEvaluacion>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const url = `${this.api}/psicometrias`
    return this.http.post<IPsicometriasEvaluacion>(url, psicometrias, { headers });
  }

}

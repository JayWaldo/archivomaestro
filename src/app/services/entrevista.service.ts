import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { IEntrevista } from '../MultiFormulario/Modelos';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {
  private api = 'https://localhost:7153';

  constructor(
    private http: HttpClient, 
    private authService: AuthService,
  ) { }

  getEntrevistas(userId: number): Observable<IEntrevista>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.api}/entrevista/${userId}`;
    return this.http.get<IEntrevista>(url);
  }

  addEntrevista(entrevista: IEntrevista): Observable<IEntrevista>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const url = `${this.api}/entrevista`
    return this.http.post<IEntrevista>(url, entrevista, { headers });
  }

}

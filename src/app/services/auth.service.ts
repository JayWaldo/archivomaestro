import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'https://localhost:7153';
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public authStatus = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.loggedInSubject.next(this.isLoggedIn());
  }

  login(email: string, password: string):Observable<any>{
    // Guardar en localstorage JWT para la sesion
    return this.http.post<{token: string}>(`${this.api}/auth/login`, { email, password })
    .pipe(
      tap(res => {
        const token = res.token;
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        this.loggedInSubject.next(true);
      })
    );
  }
  logout() {
    // Quitar del localstorage cuando cierra sesion
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.loggedInSubject.next(false);
    this.router.navigate(['/login'])
  }

  getToken() : string | null {
    return localStorage.getItem('token');
  }

  getEmail() : string | null {
    return localStorage.getItem('email');
  }

  isLoggedIn() : boolean{
    if(this.getToken()){
      return true;
    } else{
      return false;
    }
  }
}

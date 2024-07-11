import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IRegion } from '../MultiFormulario/Modelos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private api = 'https://localhost:7153';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getRegionInfo(){
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = `${this.api}/region`;
    return this.http.get<IRegion[]>(url, { headers });
  }

  getRegionById(regionId: number): Observable<IRegion>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = `${this.api}/region/${regionId}`;
    return this.http.get<IRegion>(url, { headers });
  }
}

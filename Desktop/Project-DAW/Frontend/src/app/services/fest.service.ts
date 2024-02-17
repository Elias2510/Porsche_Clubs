import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestService {
  private apiUrl = 'http:///fests'; // Adresa API pentru evenimente

  constructor(private http: HttpClient) { }

  // Funcție pentru a obține toate evenimentele
  getFests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Funcție pentru a obține un eveniment după ID
  getFestById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Funcție pentru a adăuga un nou eveniment
  addFest(fest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, fest);
  }

  // Funcție pentru a actualiza un eveniment existent
  updateFest(fest: any): Observable<any> {
    const url = `${this.apiUrl}/${fest.id}`;
    return this.http.put<any>(url, fest);
  }

  // Funcție pentru a șterge un eveniment
  deleteFest(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FestService {
  private apiUrl = 'https://localhost:7026/Fest/Fests'; 

  constructor(private http: HttpClient) { }

  
  getFests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
  getFestById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  
  addFest(fest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, fest);
  }

  
  updateFest(fest: any): Observable<any> {
    const url = `${this.apiUrl}/${fest.id}`;
    return this.http.put<any>(url, fest);
  }

  
  deleteFest(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

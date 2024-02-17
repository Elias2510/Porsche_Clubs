import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private baseUrl = 'http://localhost:7113/api/models'; // Adresa de bază pentru API-ul modelelor

  constructor(private http: HttpClient) { }

  getModels(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

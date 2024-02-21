import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private baseUrl = 'https://localhost:7026/Model/Modele'; 

  constructor(private http: HttpClient) { }

  getModels(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

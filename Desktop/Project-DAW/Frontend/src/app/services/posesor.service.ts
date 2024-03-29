import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosesorService {
  private apiUrl = 'https://localhost:7026/api/Posesor/Posesori'; 
  constructor(private http: HttpClient) { }

  getPosesori(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

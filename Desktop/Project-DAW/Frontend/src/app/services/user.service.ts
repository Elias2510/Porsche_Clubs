import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:7113/api/users'; // Adresa de bază pentru API-ul utilizatorilor

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

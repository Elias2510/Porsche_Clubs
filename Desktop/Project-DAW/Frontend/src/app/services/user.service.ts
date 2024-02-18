import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7026/api/User'; // Adresa de bază pentru API-ul utilizatorilor

  constructor(private http: HttpClient) { }
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials);
  }

  register(user: { username: string; email: string; password: string; confirmPassword: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

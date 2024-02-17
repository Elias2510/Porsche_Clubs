import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private baseUrl = 'http://localhost:7113/api/badges'; // Adresa de bază a API-ului badge

  constructor(private http: HttpClient) { }

  // Funcție pentru a obține toate badge-urile
  getBadges(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Funcție pentru a obține un badge după ID
  getBadgeById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Funcție pentru a adăuga un nou badge
  addBadge(badge: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, badge);
  }

  // Funcție pentru a actualiza un badge existent
  updateBadge(badge: any): Observable<any> {
    const url = `${this.baseUrl}/${badge.id}`;
    return this.http.put<any>(url, badge);
  }

  // Funcție pentru a șterge un badge
  deleteBadge(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}


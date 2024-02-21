import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private baseUrl = 'https://localhost:7026/Badge/Badge'; // Adresa de bază a API-ului badge

  constructor(private http: HttpClient) { }

  
  getBadges(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  
  getBadgeById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  
  addBadge(badge: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, badge);
  }

  
  updateBadge(badge: any): Observable<any> {
    const url = `${this.baseUrl}/${badge.id}`;
    return this.http.put<any>(url, badge);
  }

  
  deleteBadge(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}


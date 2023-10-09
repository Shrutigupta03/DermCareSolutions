import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  signup(formData: any): Observable<any> {
    const url = `${this.baseUrl}/signup`; // Replace with your backend signup endpoint

    // You can add headers if needed, such as authentication headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, formData, { headers });
  }

  
}
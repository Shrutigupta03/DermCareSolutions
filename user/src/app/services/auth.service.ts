import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  private user_type: string | null = null;

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token; // Return true if the token exists, false otherwise
  }

  updateProfile(user_type:string){
    this.user_type = user_type;
  }

  getUserType(): string | null {
    return this.user_type;
  }

}

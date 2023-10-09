import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  private username: string | null = null;
  private usermail: string | null = null;

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

  setUserMail(usermail:string){
    this.usermail = usermail;
  }

  getUserMail(): string | null {
    return this.usermail;
  }

  setUserName(username : string){
    this.username = username;
  }
  getUserName(): string | null{
    return this.username
  }

}

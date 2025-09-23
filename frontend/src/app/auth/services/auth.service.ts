
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/mediconnect/models/User';
import { UserRegistrationDTO } from 'src/app/mediconnect/models/UserRegistrationDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  login(user: User | { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }

  // login(username: string, password: string) {
  //   const payload = { username, password };  // send only these
  //   return this.http.post<{ token: string }>(
  //     `${environment.apiUrl}/user/login`,
  //     payload
  //   );
  // }

  // login(credentials: { username: string; password: string }) {
  //   return this.http.post<{ token: string }>(
  //     'http://localhost:3000/api/auth/login',  // 🔹 Adjust to your backend
  //     {
  //       username: credentials.username,
  //       password: credentials.password
  //     }
  //   );
  // }
  
  

  createUser(user: UserRegistrationDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
   getRole() {
    return localStorage.getItem("role");
  }
}



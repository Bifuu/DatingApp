import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodeToken();
          this.currentUser = user.user;
          console.log(this.decodedToken);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  decodeToken(token?: any) {
    this.decodedToken = this.jwtHelper.decodeToken(
      localStorage.getItem('token')
    );
  }

  parseUser() {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}

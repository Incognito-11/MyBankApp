import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  currentUser: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}
  login(username: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(map((users: string | any[]) => {
        if (users.length) {
          const user = users[0];
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        return null;
      }));

  }
 logout() {
  this.currentUser = null;
  localStorage.removeItem('currentUser');
}

  
  setUser(username: string) {
    this.currentUser = username;
    localStorage.setItem('currentUser', username);
  }
  getCurrentUser():User | null {
   const json=localStorage.getItem('currentUser');
   return json?JSON.parse(json):null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
  register(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl, user)
  }

}

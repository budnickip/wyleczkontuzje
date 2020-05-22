import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private usersUrl = 'api/users';
    private userUrl = 'api/users?email=^'
  user = User;
  mail;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(mail): Observable<User[]> {
      return this.http.get<User[]>(this.userUrl + mail);
  }

  updateUser (user): Observable<any> {
    console.log(user); //przekazuje prawidlowo
    return this.http.put(this.usersUrl + '/' + user.id, user, this.httpOptions); 

  }

    deleteUser(id: number): Observable<User> {
      return this.http.delete<User>(this.usersUrl + '/' + id, this.httpOptions);
  }

  addUser (user): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

    public getFilteredUsers(email: string): Observable<User[]> {
        let httpParams: HttpParams = new HttpParams().set('email', '^' + email);
        return this.http.get<User[]>(this.usersUrl, { params: httpParams });
    }
}

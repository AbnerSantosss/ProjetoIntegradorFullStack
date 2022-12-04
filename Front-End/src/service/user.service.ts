import { Injectable } from '@angular/core';
import { User } from '../app/models/user'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = 'http://localhost:3005/auth/usuario'

  constructor(private http: HttpClient) { }

   getAllContatos(): Observable<User[]>{
    return this.http.get<User[]>(this.API)
  }
}

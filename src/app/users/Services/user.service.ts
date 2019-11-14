import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/user.model'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = 'api/user';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    return this.http.get(
      `${environment.host}/${this.endpoint}/getAllUsers`
    )
  }

  getUserById(userId: string){
    return this.http.get(
      `${environment.host}/${this.endpoint}+/getUserById/${userId}`
      )
  }

  createUser(user: User){
    return this.http.post(
      `${environment.host}/${this.endpoint}+/createUser`, user
      )
  }

  updateUser(user: User){
    return this.http.put(
      `${environment.host}/${this.endpoint}+/updateUser`, user
      )
  }

  removeUser(userId: string){
    return this.http.delete(
      `${environment.host}/${this.endpoint}+/removeUser/${userId}`
      )
  }

  removeAllUsers(){
    return this.http.delete(
      `${environment.host}/${this.endpoint}+/removeUser`
      )
  }
}

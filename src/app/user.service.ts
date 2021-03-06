import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { AddUser } from 'src/app/model/adduser.model';
import { EditUser } from 'src/app/model/edituser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'https://reqres.in/api/';

  constructor(private httpclient: HttpClient) { }

  getUser() {
    return this.httpclient.get(this.baseURL + "users");
  }

  getUserById(id: number) {
    return this.httpclient.get(this.baseURL + "users/" + id);
  }

  addUser(addUser: AddUser) {
    return this.httpclient.post(this.baseURL + "users", addUser);
  }

  updateUser(editUser: EditUser) {
    return this.httpclient.put(this.baseURL + "users/" + editUser.id, editUser);
  }

  deleteUser(id: number) {
    return this.httpclient.delete(this.baseURL + "users/" + id);
  }
}
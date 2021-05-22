import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  dummydata: User[] = [
    new User(1, "John", "Doe", "john.doe@email.com"),
    new User(2, "Jane", "Doe", "jane.doe@email.com")
  ]

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.dummydata;
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { IObject } from '../models/user.model'


@Injectable({
  providedIn: 'root'
}) 

export class UserService {

  private serviceUrl = 'https://eagle-api.technifybiz.com/orders';
  constructor(private http: HttpClient) {}

   getUser(): Observable<IObject[]>{
     return this.http.get<IObject[]>(this.serviceUrl);
  } 
  // getUser(): Observable<User[]> {
  //   throw new Error("Method not implemented.");
  // }
}
  
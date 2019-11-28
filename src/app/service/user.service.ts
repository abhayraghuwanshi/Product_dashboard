import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model'
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private serviceUrl = 'https://eagle-api.technifybiz.com/orders' ;


  constructor(private http: HttpClient) {}

   getUser(): Observable<User[]>{
     return this.http.get<User[]>(this.serviceUrl)
                    .catch(this.errorHandler)}   ;

  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message || "Server Error")
  }
  // getUser(): Observable<User[]> {
  //   throw new Error("Method not implemented.");
  // }
}
  
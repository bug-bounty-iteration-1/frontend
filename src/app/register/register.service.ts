import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { register } from './register'
import {Role} from './role'

@Injectable({
  providedIn: 'root'
})
export class registerservice {

  private urlBase =  `http://localhost:8090/registration`;
  constructor(private httpCli: HttpClient) { }

  public postUser(register: any): Observable<register>{
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    return this.httpCli.post<register>(this.urlBase, register, httpHead);
  }
}
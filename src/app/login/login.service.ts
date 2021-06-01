import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Role } from '../role'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }
  public loginUserFromRemote(userName: string, password:string):Observable<any> {
    return this._http.post<any>(`http://localhost:8090/logindetail?username=${userName}&password=${password}`, {})
  }
}


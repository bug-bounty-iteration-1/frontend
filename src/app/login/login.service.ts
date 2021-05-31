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
  public loginUserFromRemote(user: User):Observable<any> {
    return this._http.post<any>("http://",user)
  }
}


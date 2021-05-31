import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from './bug';

@Injectable({
  providedIn: 'root'
})


export class BugService {
 
  private urlBase="http://localhost:9090/bug";
  constructor(private httpCli: HttpClient) { }

  public getAllBugs(): Observable<Bug[]>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpCli.get<Bug[]>(this.urlBase, httpHead);
  }

  public approveBug(bug) {
    return this.httpCli.put(this.urlBase + '/approve', bug)
  }
  public denyBug(bug) {
    return this.httpCli.put(this.urlBase + '/approve', bug)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuglistserviceService {

  private urlBase = "";
  constructor(private httpCli: HttpClient) { }

  public getAllBugs(): Observable<any> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<any>(this.urlBase, httpHead);
  }
  public approveBug(bug) {
    return this.httpCli.put(this.urlBase + '/approve', bug)
  }
  public denyBug(bug) {
    return this.httpCli.put(this.urlBase + '/approve', bug)
  }
}

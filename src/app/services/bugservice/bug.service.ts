import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from './bug';

@Injectable({
  providedIn: 'root'
})


export class BugService {
  
 bug=new Bug();
 user = localStorage.getItem('user');

  private urlBase="http://localhost:9090/bug";
  private urlBase2="http://localhost:9090/bug/update-bugStatus";
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

    console.log(bug);
    return this.httpCli.post(this.urlBase2,bug)


  }
  public denyBug(bug) {
   
    console.log(bug);
    return this.httpCli.post(this.urlBase2,bug)
  }

  public createBug(bug) {
    return this.httpCli.post(this.urlBase + '/new-bug', bug)
  }

}

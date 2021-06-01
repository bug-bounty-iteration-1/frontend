import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solutions } from './solutions';

@Injectable({
  providedIn: 'root'
})
export class SolutionServiceService {

  private urlBase="http://localhost:9090/solutions";

  constructor(private httpCli: HttpClient) { }

  public newSolution(solution) {
    

    console.log(solution);
    return this.httpCli.post(this.urlBase + "/new-solution",solution);


  }

  public getBugSolutions(bugID): Observable<Solutions[]>{
    return this.httpCli.get<Solutions[]>(this.urlBase + "/" + bugID);
  }
}

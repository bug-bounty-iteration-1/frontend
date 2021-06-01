import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionServiceService {

  private urlBase="http://localhost:9090/solutions/new-solution";

  constructor(private httpCli: HttpClient) { }

  public newSolution(solution) {
    

    console.log(solution);
    return this.httpCli.post(this.urlBase,solution);


  }
}

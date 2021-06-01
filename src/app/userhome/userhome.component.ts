import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bug } from '../services/bugservice/bug';
import { BugService } from '../services/bugservice/bug.service';
import { BugOwner } from '../services/bugservice/bugOwner';
import { SolutionServiceService } from '../solution-service.service';
import { Solutions } from '../solutions';
import { User } from '../user';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  bugList: Bug[];
  constructor(private bServ: BugService,private sServ :SolutionServiceService) { }
  display = "none";
  detail= "none";
  solution= new Solutions();

  solutionList: Array<Solutions>;
  

  msg;

  ngOnInit(): void {
    
    this.bServ.getAllBugs().subscribe(
      response => {
        console.log(response);
        this.bugList = response;
      }
    )
  }
  bugToUpdate = {
    bugId: "",
    bugDescription: "",
    bugOwner:BugOwner
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  openDetailsModal(bug) {
    this.detail = "block";
    this.bugToUpdate = bug;
    this.sServ.getBugSolutions(bug.bugId).subscribe(x => this.solutionList = x);
    console.log(this.solutionList);
 
  }

  closeDetailsModal(){
    this.detail = "none";
  }

  submitSolution(bugId,sol,bugOwner){
    console.log(sol);
    this.solution.solution=sol;
    this.solution.solutionSubmissionDate=new Date();
    this.solution.bug = new Bug();
    this.solution.bug.bugId=bugId;
    this.solution.bug.bugOwner=bugOwner;
    this.solution.user = new User();
    this.solution.user.userId=parseInt(localStorage.getItem('userId'));
    
    console.log(this.solution);

    this.sServ.newSolution(this.solution).subscribe(
      response => {
        console.log(response);
        if(response=-1){
          this.msg="You cannot solve your own bug";
        }
      }
    )

  }

}

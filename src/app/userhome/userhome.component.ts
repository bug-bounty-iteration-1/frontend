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
  bugModel : Partial<Bug>;
  solution= new Solutions();
  currentUserId: number;
  currentBugOwnerId: number;

  solutionList: Array<Solutions>;
  

  msg;

  ngOnInit(): void {
    
    this.bServ.getAllBugs().subscribe(
      response => {
        console.log(response);
        this.bugList = response;
      }
    )
    this.currentUserId = parseInt(localStorage.getItem('userId'));
  }
  bugToUpdate = {
    bugId: "",
    bugDescription: "",
    bugOwner : BugOwner
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
    console.log(this.bugToUpdate);
    this.sServ.getBugSolutions(bug.bugId).subscribe(x => this.solutionList = x);
    console.log(this.solutionList);
    //untyping bugOwner to access userId field
    let owner : any = this.bugToUpdate.bugOwner;
    this.currentBugOwnerId = owner.userId;
 
  }

  closeDetailsModal(){
    this.detail = "none";
  }

  submitBug(bug){
    let date = new Date();
    bug.bugSubmissionDate = date;
    let id = parseInt(localStorage.getItem('userId'));
    console.log(id);
    let bugOwner = {userId: id};
    bug.bugOwner = bugOwner;
    console.log(bug);
    this.bServ.createBug(bug).subscribe(response => {
      // console.log(response);
    });
    window.location.reload();
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
         // this.msg="You cannot solve your own bug";
         alert("you cannot solve your own bug");
        }
        else
        window.location.reload();
      }
    )

  }

  approveSolution(solution){
    solution.solutionStatus = true;
    this.sServ.approveSolutions(solution).subscribe(
      res => {
        console.log(res);
      }
    );
    window.location.reload;
  }

}

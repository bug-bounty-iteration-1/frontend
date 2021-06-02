import { Component, OnInit } from '@angular/core';
import { Bug } from '../services/bugservice/bug';
import { BugOwner } from '../services/bugservice/bugOwner';
import { BugService } from '../services/bugservice/bug.service';
import { SolutionServiceService } from '../solution-service.service';
import { User } from '../user';
import { Solutions } from '../solutions';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  bugList: Bug[];
  constructor(private bServ: BugService, private sServ :SolutionServiceService) { }
  display = "none";
  detail= "none";
  solution= new Solutions();
  bugModel : Partial<Bug>;
  
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
          this.msg="You cannot solve your own bug";
        }
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

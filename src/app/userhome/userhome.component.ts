import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bug } from '../services/bugservice/bug';
import { BugService } from '../services/bugservice/bug.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  bugList: Bug[];
  constructor(private bServ: BugService) { }
  display = "none";
  detail= "none";
  bugModel : Partial<Bug>;


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
    bugDescription: ""
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
 
  }

  closeDetailsModal(){
    this.detail = "none";
  }

  submitBug(bug){
    let date = new Date();
    bug.bugSubmissionDate = date;
    bug.bugOwner = {userId: 1}
    this.bServ.createBug(bug).subscribe(response => {
      // console.log(response);
    });
    
  }

}

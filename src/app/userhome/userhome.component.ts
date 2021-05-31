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

  ngOnInit(): void {

    this.bServ.getAllBugs().subscribe(
      response => {
        console.log(response);
        this.bugList = response;
      }
    )
  }
 
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  openDetailsModal() {
    this.detail = "block";
    
  }

  closeDetailsModal(){
    this.detail = "none";
  }

}

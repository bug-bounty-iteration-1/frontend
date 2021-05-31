import { Component, OnInit } from '@angular/core';
import { Bug } from '../services/bugservice/bug';
import { BugService } from '../services/bugservice/bug.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

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

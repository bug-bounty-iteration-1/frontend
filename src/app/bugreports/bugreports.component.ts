import { Component, OnInit } from '@angular/core';
import { Bug } from '../services/bugservice/bug';
import { BugService } from '../services/bugservice/bug.service';

@Component({
  selector: 'app-bugreports',
  templateUrl: './bugreports.component.html',
  styleUrls: ['./bugreports.component.css']
})

export class BugreportsComponent implements OnInit {

  bugList: Bug[];

  constructor(private bServ :BugService ) { }

  ngOnInit(): void {
     this.bServ.getAllBugs().subscribe(
      response =>{
        console.log(response);
        
        this.bugList=response;
      }); 
      console.log(this.bugList);
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  public approveBug(bug) {
    this.bServ.approveBug(bug).subscribe(
      response => {
        console.log(response);
      }
    )
    this.reloadCurrentPage();
  }

  public denyBug(bug) {
    this.bServ.denyBug(bug).subscribe(
      response => {
        console.log(response);
      }
    )
    this.reloadCurrentPage();
  }

}

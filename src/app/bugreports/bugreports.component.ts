import { Component, OnInit } from '@angular/core';
import { BuglistserviceService } from './buglistservice.service';
import { Bug } from '../services/bugservice/bug';
/*interface Bug {
  id: number;
  name: string;
  description: string;
  date: string;
  status: string;
}*/

@Component({
  selector: 'app-bugreports',
  templateUrl: './bugreports.component.html',
  styleUrls: ['./bugreports.component.css']
})

export class BugreportsComponent implements OnInit {

  bugList: Bug[];

  constructor(private bServ :BuglistserviceService ) { }

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

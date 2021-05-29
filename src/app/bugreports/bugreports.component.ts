import { Component, OnInit } from '@angular/core';
import { BuglistserviceService } from './buglistservice.service';

interface Bug {
  id: number;
  name: string;
  description: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-bugreports',
  templateUrl: './bugreports.component.html',
  styleUrls: ['./bugreports.component.css']
})

export class BugreportsComponent implements OnInit {

  
  bugsList:Bug[]=[{
    id:1,
    name:"Mantesh",
    description:"bugReport backend not complete",
    date:"2021/05/29",
    status:"pending"
  }];

  constructor(private bServ :BuglistserviceService ) { }

  ngOnInit(): void {
     this.bServ.getAllBugs().subscribe(
      response =>{
        console.log(response);
        
        this.bugsList=response;
      }); 
      console.log(this.bugsList);
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

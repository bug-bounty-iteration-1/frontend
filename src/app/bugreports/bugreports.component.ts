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

  isShow1:boolean= false;
  isShow2:boolean= false;
  searchValue:string;


  bug= new Bug();
  constructor(private bServ :BugService ) { }


  ngOnInit(): void {
    
     this.bServ.getAllBugs().subscribe(
      response =>{
        console.log(response);
        
        this.bugList=response;
      }); 
      
  }
  
  setValue()
  {
    this.isShow1 =!this.isShow1;
    this.isShow2 =false;
  
    this.bServ.getAllBugs().subscribe(
      response =>{
        console.log(response);
        this.bugList=response;
      }); 
      
    console.log(this.bugList);
  }
  
  setValue2()
  {
    this.isShow2 =!this.isShow2;
    this.isShow1 =false;
  }

  reloadCurrentPage() {
    window.location.reload();
   }
  public approveBug(bug) {
    bug.bugStatus.statusId=2;
    bug.bugStatus.status="Accepted";
   
    this.bServ.approveBug(bug).subscribe(
      response => {
        console.log(response);
      }
    )
   
  }

  public denyBug(bug) {
    bug.bugStatus.statusId=4;
    bug.bugStatus.status="Rejected";
    this.bServ.denyBug(bug).subscribe(
      response => {
        console.log(response);
      }
    )
    
  }

}

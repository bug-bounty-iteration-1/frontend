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

  constructor(private bServ :BugService) { }

  ngOnInit(): void {
    
     this.bServ.getAllBugs().subscribe(
      response =>{
        console.log(response);
        
        //this.bugList=response;
        this.bugList= [
          { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
          { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
          { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
          { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
          { bugId: 355, bugDescription: 'Testing note 2', bugSubmissionDate: null, bugStatus:null },
          { bugId: 456, bugDescription: 'Testing note 3', bugSubmissionDate: null, bugStatus:null  },
        ];
      }); 
      console.log(this.bugList);
  }
  
  
  setValue()
  {
    this.isShow1 =!this.isShow1;
    this.isShow2 =false;

    this.bugList= [
      { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
      { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
      { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
      { bugId: 123, bugDescription: 'Testing note 1', bugSubmissionDate: null, bugStatus: null },
      { bugId: 355, bugDescription: 'Testing note 2', bugSubmissionDate: null, bugStatus:null },
      { bugId: 456, bugDescription: 'Testing note 3', bugSubmissionDate: null, bugStatus:null  },
    ];

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

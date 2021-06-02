import { Component, OnInit } from '@angular/core';
import { Bug } from '../../services/bugservice/bug';
import { BugService } from '../../services/bugservice/bug.service';

@Component({
  selector: 'app-profile-reports',
  templateUrl: './profile-reports.component.html',
  styleUrls: ['./profile-reports.component.css']
})
export class ProfileReportsComponent implements OnInit {


  bugList:Bug[];

  userName = localStorage.getItem('userName');
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  user = localStorage.getItem('user');
  role = localStorage.getItem('role');
  
  constructor(private bServ :BugService ) { }

  ngOnInit(): void {
     this.bServ.getAllBugs().subscribe(
      response =>{
      
      this.bugList= response; 
        
      }); 
      console.log(this.user);
      console.log(this.bugList);
  }
  reloadCurrentPage() {
    window.location.reload();
   }


  // constructor() { }

  // ngOnInit(): void {
  // }

}

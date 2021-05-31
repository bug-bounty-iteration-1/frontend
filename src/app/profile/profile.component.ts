import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstLetter: String = "S"
  lastLetter: String = "Z"
  solutionArray: Array<{ bugName: String, bugLink: String, solutionText: String, solutionStatus: String }>
  = [
    {bugName: 'Vestibulum at eros 1', bugLink: 'Dapibus ac facilisis in 1',
     solutionText: 'Cras justo odio 1', solutionStatus: 'Approved' },
     {bugName: 'Vestibulum at eros 2', bugLink: 'Dapibus ac facilisis in 2',
     solutionText: 'Cras justo odio 2', solutionStatus: 'Approved' },
     {bugName: 'Vestibulum at eros 3', bugLink: 'Dapibus ac facilisis in 3',
     solutionText: 'Cras justo odio 3', solutionStatus: 'Approved' },
     {bugName: 'Vestibulum at eros 4', bugLink: 'Dapibus ac facilisis in 4',
     solutionText: 'Cras justo odio 4', solutionStatus: 'Approved' },
     {bugName: 'Vestibulum at eros 5', bugLink: 'Dapibus ac facilisis in 5',
     solutionText: 'Cras justo odio 5', solutionStatus: 'Approved' },

  ]


  constructor() { }

  ngOnInit(): void {
  }

}


  // constructor(private api: UserService, private router: Router) { }

  // ngOnInit(): void {
  //   this.client = this.api.getLoggedClient()
  //   if (this.client == null || this.client === undefined)
  //   this.router.navigate(["/"]);
  //   this.assignRole()
  //   // this.client.role ? this.client.Role="Developer" : this.client.Role="Admin"
  //   this.getClientPoint()
  // }
  // bugStatus
  // solutionStatus
  // points
  // client
  // closeResult = '';

  // async getClientPoint(){
  //   this.points = await this.api.getPoints(this.client.cId)
  //   console.log(this.points)
  //  }

  //  assignRole(){
  //   if(this.client === 0){
  //     this.client.Role = "Developer"
  //   }
  //   else{
  //     this.client.Role = "Admin"
  //   }
  // }
  // }



import { Component, OnInit } from '@angular/core';

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

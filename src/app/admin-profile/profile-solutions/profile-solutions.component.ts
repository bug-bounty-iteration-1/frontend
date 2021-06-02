import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-solutions',
  templateUrl: './profile-solutions.component.html',
  styleUrls: ['./profile-solutions.component.css']
})
export class ProfileSolutionsComponent implements OnInit {
  @Input() bugName: String = ""
  @Input() bugLink: String =""
  @Input() solutionText: String =""
  @Input() solutionStatus: String =""

  constructor() { }

  ngOnInit(): void {
  }

}

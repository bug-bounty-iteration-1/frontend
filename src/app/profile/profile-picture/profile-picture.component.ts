import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  firstLetter:String = 'S';
  lastLetter:String ='Z';

  constructor() { }

  ngOnInit(): void {
  }

}

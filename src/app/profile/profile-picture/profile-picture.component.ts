import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  @Input() firstLetter:String = '';
  @Input() lastLetter:String ='';

  constructor() { }

  ngOnInit(): void {
  }

}

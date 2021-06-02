import { Component, Input, OnInit } from '@angular/core';
import { Solutions } from '../solutions';

@Component({
  selector: 'app-home-solutions-list',
  templateUrl: './home-solutions-list.component.html',
  styleUrls: ['./home-solutions-list.component.css']
})
export class HomeSolutionsListComponent implements OnInit {
  @Input() solution : Solutions;
  

  constructor() { }

  ngOnInit(): void {
  }

}

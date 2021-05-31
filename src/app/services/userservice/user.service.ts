import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getLoggedClient(): any {
    throw new Error('Method not implemented.');
  }
  getPoints(cId: any): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

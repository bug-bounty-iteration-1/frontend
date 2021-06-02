import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from './services/bugservice/bug';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(bugList: Bug[],searchValue:string): Bug[] {
    if(!bugList||!searchValue)
    {
    return bugList;
  }
  return bugList.filter(bug=>bug.bugDescription.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
  bug.bugId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));


  // return bugList.filter(bug=>bug.bugDescription.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
   //bug.bugId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    //bug.bugSubmissionDate.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())|| 
    //bug.bugStatus.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
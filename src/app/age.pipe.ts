import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let joinYear = new Date(value).getFullYear();
    let joinMonth = new Date(value).getMonth();
    let githubLife = ((currentYear-joinYear)*12) + ((currentMonth-joinMonth)+1);
    return githubLife;
  }

}

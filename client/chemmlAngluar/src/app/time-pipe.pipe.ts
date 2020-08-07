import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value: string): string {
    var date = new Date(value);
    return date.toDateString();
  }
  

}

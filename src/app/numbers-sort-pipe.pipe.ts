import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersSortPipe'
})
export class NumbersSortPipePipe implements PipeTransform {
  sortNumber = function(first,second){
      console.log("received" + first + " and " + second)
      return first-second
  }


  transform(value: any, args?: any): any {
    if (agrs =='asc'){
      return   value.sort(this.sortNumber);
    } else if (args == 'dsc'){
      return value.sort().reverse();
  }

}
}
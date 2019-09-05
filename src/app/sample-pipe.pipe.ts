import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplePipe'
})
export class SamplePipePipe implements PipeTransform {

  transform(value: any[], searchText:any): any {
    //  this will return values to regarding component function
    // return value.fullname.toUpperCase();
    // console.log('from pipe.ts',value.fullname)
    if(!value || !searchText){
      // console.log('in pipe.ts arr',value)
      return value;
    }
     return value.filter(value_name_ =>value_name_.fullname.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    
    // kud venkat gives good

  }

}

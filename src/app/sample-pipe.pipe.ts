import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplePipe'
})
export class SamplePipePipe implements PipeTransform {

  transform(value: any[], searchText:any, prop?:any): any {
    //  this will return values to regarding component function
    // return value.fullname.toUpperCase();
    // console.log('from pipe.ts',value.fullname)
    if(!value){
      // console.log('in pipe.ts arr',value)
      return [];
    }
    if(!searchText || !prop){
      // console.log('in pipe.ts arr',searchText)
      return value;
    }
    // kud venkat gives good

  }

}

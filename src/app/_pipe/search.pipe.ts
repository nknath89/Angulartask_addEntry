import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string): any {
    console.log(args)

    if(args){
      return value.filter((rowcontent)=>{
        return JSON.stringify(rowcontent, ["first_name", "last_name"]).toUpperCase().match(args.toUpperCase())
      })
    } else{
      return value;
    }
    
  }

}

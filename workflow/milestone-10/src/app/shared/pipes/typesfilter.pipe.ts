import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typesfilter'
})
export class TypesfilterPipe implements PipeTransform {

  transform(movietypes: any[],genre:string): any {
    if(genre=="All")
    return movietypes;
    
  return movietypes.filter((x:any)=>x.genre==genre)
  }

}

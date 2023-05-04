import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reviewfilter'
})
export class ReviewfilterPipe implements PipeTransform {

  transform(reviews: any, prod:string): any {
    return reviews.filter((x:any)=>x.product == prod)
  }

}

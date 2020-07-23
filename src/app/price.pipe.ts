import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any[], max: number): any {
    //return value.filter(products => (products.price < max));
    if(max==1){
      return value.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)); 

    }else if(max==2){
     return  value.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0))
    }else{
          return value;
    }
  }

}

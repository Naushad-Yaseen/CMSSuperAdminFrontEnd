import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
//   transform(items: any[], term: string): any {
//     // I am unsure what id is here. did you mean title?
//     return items.filter(item => item.id.indexOf(term) !== -1);
// }

  transform(items: any[], field:string, value: string): any[] {

    if(!items)
    {
      return [];
    }

    if(!field||!value){
      return items;
    }


    return items.filter( singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
   }

}

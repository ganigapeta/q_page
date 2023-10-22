import { Pipe, PipeTransform } from '@angular/core';
import { difference } from 'lodash';
import { ListItem } from './multi-select.model';

@Pipe({
  name: 'multiSelectFilter',
  pure: false,
})
export class ListFilterPipe implements PipeTransform {
  transform(items: ListItem[], filter: ListItem[]): ListItem[] {
    const filteredArray = difference(items, filter);
    return filteredArray;
  }


}

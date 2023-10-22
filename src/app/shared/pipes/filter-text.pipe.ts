import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterText',
    pure: false
})

export class FilterTextPipe implements PipeTransform {
    transform(value: any, searchText: string) {
        const filteredList = value.filter((v: any) => v.name.toLowerCase().search(searchText.toLowerCase()) > -1)
        return filteredList;
    }
}
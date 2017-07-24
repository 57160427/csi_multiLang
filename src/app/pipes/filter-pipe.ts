import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keyword' })
export class SearchPipe implements PipeTransform {
    transform(keys: any, searchTxt: any) {
        // console.log(keys);
        if (searchTxt == null) return keys;
        return keys.filter(function (keyword) {
            return keyword.value.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1;
        })
    }
}
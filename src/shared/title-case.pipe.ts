import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

    transform(value: string): string {
        return value.split(' ').reduce((sentence, word) => {
            let first = word.charAt(0).toUpperCase();

            return sentence += `${first}${word.slice(1)} `;
        }, '')
    }
}
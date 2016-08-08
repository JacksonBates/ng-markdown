import {Pipe, PipeTransform} from '@angular/core';
import * as marked from 'marked';
// marked().format();

@Pipe({
    name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
    transform(value: string) : string {
        if (value != null) {
            return marked(value);
        }
        return null;
    }
}
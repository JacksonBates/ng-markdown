import { Component } from '@angular/core';

import { Markdown } from './markdown';
import { MarkdownPipe } from "./MarkdownPipe.pipe";

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],
  pipes: [MarkdownPipe]
})
export class AppComponent { 
  title = 'Angular 2 Markdown Previewer';
  markdown: Markdown = {
    raw: "# Titles \n## Heading \n1. numbered \n1. lists \n\n\n+ Unordered\n  + nested\n  + lists \n\n---\n**bold** _italic_  ~~strikethrough~~ [Link](http://freecodecamp.com)\n```js \nfunction codeBlock() {\n  while (inBackticks) {\n    showCodeBlock();\n  };\n};\n```"
  };
}

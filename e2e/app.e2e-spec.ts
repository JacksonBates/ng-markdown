import { NgMarkdownPage } from './app.po';

describe('ng-markdown App', function() {
  let page: NgMarkdownPage;

  beforeEach(() => {
    page = new NgMarkdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

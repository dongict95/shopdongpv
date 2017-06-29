import { TedushopNg2Page } from './app.po';

describe('tedushop-ng2 App', () => {
  let page: TedushopNg2Page;

  beforeEach(() => {
    page = new TedushopNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

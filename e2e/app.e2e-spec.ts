import { MultiLangPage } from './app.po';

describe('multi-lang App', () => {
  let page: MultiLangPage;

  beforeEach(() => {
    page = new MultiLangPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

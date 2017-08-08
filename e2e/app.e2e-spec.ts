import { BroadkartPage } from './app.po';

describe('broadkart App', () => {
  let page: BroadkartPage;

  beforeEach(() => {
    page = new BroadkartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

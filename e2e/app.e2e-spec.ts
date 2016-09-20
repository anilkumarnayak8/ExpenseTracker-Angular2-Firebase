import { ExpressPage } from './app.po';

describe('express App', function() {
  let page: ExpressPage;

  beforeEach(() => {
    page = new ExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

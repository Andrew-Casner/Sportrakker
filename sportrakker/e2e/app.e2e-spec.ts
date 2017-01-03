import { SportrakkerPage } from './app.po';

describe('sportrakker App', function() {
  let page: SportrakkerPage;

  beforeEach(() => {
    page = new SportrakkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AquaPage } from './app.po';

describe('aqua App', () => {
  let page: AquaPage;

  beforeEach(() => {
    page = new AquaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

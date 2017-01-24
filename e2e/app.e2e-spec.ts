import { SpotifyPage } from './app.po';

describe('spotify App', function() {
  let page: SpotifyPage;

  beforeEach(() => {
    page = new SpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

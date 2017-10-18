import { browser, by, element } from 'protractor';

export class SearchGithubPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gh-root h1')).getText();
  }
}

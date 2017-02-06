'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /choose when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/choose");
  });


  describe('choose', function() {

    beforeEach(function() {
      browser.get('index.html#!/choose');
    });


    it('should render choose when user navigates to /choose', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('results', function() {

    beforeEach(function() {
      browser.get('index.html#!/results');
    });


    it('should render results when user navigates to /results', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

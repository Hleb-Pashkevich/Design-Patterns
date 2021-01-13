const PageFactory = require("../utils/page_objects/pageFactory");
const {protractor, browser, Key} = require('protractor');
const EC = protractor.ExpectedConditions;

describe('simple test using js executor',  function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('should scroll down to "Transforming" image and click it', async function() {
        await PageFactory.getPage('Our Work').open();
        let element = browser.element(by.xpath('//*[text()=\'Transforming the Entertainment Experience with Vue\']'));
        await PageFactory.getPage('Our Work').scrollToImage(element);
        await PageFactory.getPage('Our Work').wait(1000);
        await PageFactory.getPage('Our Work').clickImage(element);
        await PageFactory.getPage('Our Work').wait(1000);
    });
});
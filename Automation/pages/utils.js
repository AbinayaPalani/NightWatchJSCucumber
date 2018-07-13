module.exports = function(browser){

    this.LaunchURL = function(){
        browser
        .url("http://staging.jbilling.a-cti.com:8081/admintool?brandId=c26495e9-f41e-4b8d-a442-22ab742563b7&accountPin=02c7bb2e-4ef4-4f77-ae7f-22a5b3ff0960")
        .waitForElementVisible('#accountSummary',1000);
        return browser;
    }
   
    return this;
};
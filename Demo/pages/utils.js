module.exports = function(browser){

    this.LaunchURL = function(){
        browser
        .url("http://staging.jbilling.a-cti.com:8081/admintool?brandId=c26495e9-f41e-4b8d-a442-22ab742563b7&accountPin=02c7bb2e-4ef4-4f77-ae7f-22a5b3ff0960")
        .waitForElementVisible('body',1000);
        return browser;
    };
    this.credit = function(){
        browser
        .click('#credit');
    };
    this.debit = function(){
        browser
            .click('#debit');
    };
     this.refund = function(){
         browser
         .click('#refund');
     };
     this.waitForElement = function(){
         browser
         .waitForElementVisible('#notification',10000000);
     };
    this.notificationText = function(){
        browser
            .getText('#notification', function(text){
                console.log("Notification Message : "+text.value);
            })
       
    };
     
    return this;
};
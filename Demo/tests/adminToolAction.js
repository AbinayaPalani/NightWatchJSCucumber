var utils = require("../pages/utils");
var creditAmt = [1,2,3,4,5,6,7,8,9];

module.exports = {

    '@tags':['AccountDetails'],
    before: function(browser){
      utils(browser).LaunchURL();
    },
    'click the credit function and process the credit to the user' : function(browser){
      
      //for(amtIndex = 0 ; amtIndex < creditAmt.length; amtIndex++){
          utils(browser).credit();
          var creditFn = browser.page.elements();
          creditFn
            .setValue('@emailApproval','test@mail.com')
            .setValue('@amount',4)
            .setValue('@reason','Checking the credit process in the admin tool...')
            .setValue('@description','testing the credit functionality process in admin tools..')
            .click('@submitButton');
          utils(browser).waitForElement();    
          utils(browser).notificationText();   
      //}
    },
    'click the debit section and process the debit to the customer': function(browser){

      utils(browser).debit();
      var debitFn = browser.page.elements();
      debitFn
        .setValue('@emailApproval','testing@debit.com')
        .setValue('@amount','5')
        .setValue('@reason','Checking the debit process in the admin tool...')
        .setValue('@description','testing the debit functionality process in admin tools..')
        .click('@submitButton');
        
      utils(browser).waitForElement(); 
      utils(browser).notificationText();
     
    },
    after : function(browser){
      browser.pause(5000);
      browser.end();
    }
  };


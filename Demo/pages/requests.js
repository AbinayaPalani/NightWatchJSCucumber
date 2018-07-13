var Request = require("request");
var UserInformation;

exports.UserInformation = function (callback) {
  Request.get({
    url: "http://staging.jbilling.a-cti.com:8081/v1/getUserByAccountPin/accountPin/02c7bb2e-4ef4-4f77-ae7f-22a5b3ff0960/brandId/c26495e9-f41e-4b8d-a442-22ab742563b7",
    json: true,
  }, callback);

};


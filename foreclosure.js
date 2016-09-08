'use strict';
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan(){
  var account = {
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted: 0,
    defaultsToForeclose: 5,
    foreclosed: false,
  };

    function missPayment(){
      account.defaulted += 1;
      if(account.defaulted >= account.defaultsToForeclose){
        account.foreclosed = true;
      }
    }

    var returnedObject = {};

      returnedObject.getBalance = function(){
          return account.balance;
      };

      returnedObject.receivePayment = function(amount){
        if(amount < account.monthlyPayment){
          missPayment();
          account.balance -= account.amount;
        }
      };

      returnedObject.getMonthlyPayment = function(){
        return account.monthlyPayment;
      };

      returnedObject.isForeClosed = function(){
        return account.foreclosed;
      };

    return returnedObject;
}

stevesLoan = loan();
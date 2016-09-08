'use strict';
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan(){
  var account = new Object();
    account.borrowed = 550000;
    account.balance = 286000;
    account.monthlyPayment = 1700;
    account.defaulted = 0;
    account.defaultsToForeclose = 5;
    account.foreclosed = false;

}
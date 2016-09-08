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

    var returnedLoan = {};

      returnedLoan.getBalance = function(){
          return account.balance;
      };

      returnedLoan.receivePayment = function(amount){
        if(amount < account.monthlyPayment){
          missPayment();
        }
        account.balance -= amount;
      };

      returnedLoan.getMonthlyPayment = function(){
        return account.monthlyPayment;
      };

      returnedLoan.isForeclosed = function(){
        return account.foreclosed;
      };

    return returnedLoan;
}

function borrower(loan){
    var account = {
    monthlyIncome: 1350,
    funds: 2800,
    loan: loan,
  };


  var returnedBorrower = {};

  returnedBorrower.getFunds = function(){
    return account.funds;
  };

  returnedBorrower.makePayment = function(){
    var monthlyPayment = loan.getMonthlyPayment();

    if(account.funds >= monthlyPayment){
      account.funds -= monthlyPayment;
      loan.receivePayment(monthlyPayment);
    }
    else{
      loan.receivePayment(account.funds);
      account.funds = 0;
    }


  };

  returnedBorrower.payDay = function(){
    account.funds += account.monthlyIncome;
  };

  return returnedBorrower;

}

stevesLoan = loan();
steve = borrower(stevesLoan);


while (stevesLoan.isForeclosed() === false && stevesLoan.getBalance() > 0) {
  steve.payDay();
  steve.makePayment();
  month+=1;
}